'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { partSchema } from '@/validations/partSchema';
import FormInput from '../form-element/FormInput';
import FormTextarea from '../form-element/FormTextarea';
import Button from '../buttons/Button';
import { updatePart } from '@/actions/partsActions';
import SuccessAlert from '../alerts/SuccessAlert';
import ErrorAlert from '../alerts/ErrorAlert';

// Recebe como prop el objeto "part" con los valores actuales
export default function PartEditForm({ part }) {
  const [loading, setLoading] = useState(false);
  const [submitResponse, setSubmitResponse] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(partSchema),
    defaultValues: part,
  });

  // Reinicia los valores del formulario si "part" cambia
  useEffect(() => {
    reset(part);
  }, [part, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmitResponse(null);
    try {
      const response = await updatePart({ ...data, id: part.id });
      setSubmitResponse(response);
    } catch (error) {
      console.error(error);
      setSubmitResponse({
        success: false,
        message: error.message || 'Error al actualizar la pieza',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 sm:space-y-8'>
      <div className='mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:pb-0'>
        <FormInput
          id='name'
          label='Nombre'
          register={register}
          errors={errors}
        />
        <FormInput
          id='sn'
          label='Número de Serie'
          register={register}
          errors={errors}
        />
        <FormTextarea
          id='description'
          label='Descripción'
          register={register}
          errors={errors}
        />
      </div>
      <div>
        {submitResponse && submitResponse.success === true && (
          <SuccessAlert message={submitResponse.message} />
        )}
        {submitResponse && submitResponse.success === false && (
          <ErrorAlert message={submitResponse.message} />
        )}
      </div>
      <div className='flex items-center justify-end gap-x-6'>
        <Button type='submit' variant='primary' disabled={loading}>
          {loading ? 'Procesando...' : 'Actualizar Pieza'}
        </Button>
      </div>
    </form>
  );
}
