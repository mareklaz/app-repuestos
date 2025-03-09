'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { partSchema } from '@/validations/partSchema';
import FormInput from '../form-element/FormInput';
import FormTextarea from '../form-element/FormTextarea';
import Button from '../buttons/Button';
import { createPart } from '@/actions/partsActions';
import SuccessAlert from '../alerts/SuccessAlert';
import ErrorAlert from '../alerts/ErrorAlert';

export default function PartForm() {
  const [loading, setLoading] = useState(false);
  const [submitResponse, setSubmitResponse] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(partSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmitResponse(null);
    try {
      const response = await createPart(data);
      setSubmitResponse(response);
      reset();
    } catch (error) {
      console.error(error);
      setSubmitResponse(response);
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
          {loading ? 'Procesando...' : 'Crear Pieza'}
        </Button>
      </div>
    </form>
  );
}
