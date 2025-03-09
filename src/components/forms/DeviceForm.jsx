import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { deviceSchema } from '@/validations/deviceSchema';
import FormInput from '../form-element/FormInput';
import FormTextarea from '../form-element/FormTextarea';
import FormDate from '../form-element/FormDate';
import FormSelect from '../form-element/FormSelect';
import Button from '../buttons/Button';
import { createDevice } from '@/actions/deviceActions';
import SuccessAlert from '../alerts/SuccessAlert';
import ErrorAlert from '../alerts/ErrorAlert';

export default function DeviceForm() {
  const [loading, setLoading] = useState(false);
  const [submitResponse, setSubmitResponse] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(deviceSchema),
  });

  const formatDate = (date) => date.toISOString().split('T')[0];

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmitResponse(null);
    try {
      const response = await createDevice(data);
      setSubmitResponse(response);
      reset();
    } catch (error) {
      console.error(error);
      setSubmitResponse({
        success: false,
        message: error.message || 'Error al crear el dispositivo',
      });
    } finally {
      setLoading(false);
    }
  };

  const statusOptions = [
    { value: 'nuevo', label: 'Nuevo' },
    { value: 'reparado', label: 'Reparado' },
    { value: 'mantenimiento', label: 'Mantenimiento' },
    { value: 'averiado', label: 'Averiado' },
  ];

  const warrantyStartValue = watch('warranty.start');

  const getBaseDate = () => {
    return warrantyStartValue ? new Date(warrantyStartValue) : new Date();
  };

  const addDate = (baseDate, yearsToAdd) => {
    return new Date(
      baseDate.getFullYear() + yearsToAdd,
      baseDate.getMonth(),
      baseDate.getDate(),
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 sm:space-y-8'>
      <div className='mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:divide-y sm:divide-gray-900/10'>
        <FormInput
          id='name'
          label='Nombre'
          register={register}
          errors={errors}
        />
        <FormInput
          id='manufacturer'
          label='Fabricante'
          register={register}
          errors={errors}
        />
        <FormInput
          id='model'
          label='Modelo'
          register={register}
          errors={errors}
        />
        <FormInput
          id='sn'
          label='Número de Serie'
          register={register}
          errors={errors}
        />
        <FormInput
          id='firmware'
          label='Firmware'
          register={register}
          errors={errors}
        />
        <FormTextarea
          id='description'
          label='Descripción'
          register={register}
          errors={errors}
        />

        <FormDate
          id='warranty.start'
          label='Inicio de Garantía'
          register={register}
          errors={errors}
        >
          <Button
            variant='secondary'
            type='button'
            onClick={() => setValue('warranty.start', formatDate(new Date()))}
          >
            Hoy
          </Button>
        </FormDate>

        <FormDate
          id='warranty.end'
          label='Fin de Garantía'
          register={register}
          errors={errors}
        >
          <div className='mt-2 flex gap-2'>
            <Button
              variant='secondary'
              type='button'
              onClick={() => {
                const base = getBaseDate();
                const newDate = addDate(base, 1);
                setValue('warranty.end', formatDate(newDate));
              }}
            >
              +1 año
            </Button>
            <Button
              variant='secondary'
              type='button'
              onClick={() => {
                const base = getBaseDate();
                const newDate = addDate(base, 2);
                setValue('warranty.end', formatDate(newDate));
              }}
            >
              +2 años
            </Button>
            <Button
              variant='secondary'
              type='button'
              onClick={() => {
                const base = getBaseDate();
                const newDate = addDate(base, 3);
                setValue('warranty.end', formatDate(newDate));
              }}
            >
              +3 años
            </Button>
          </div>
        </FormDate>

        <FormTextarea
          id='warranty.type'
          label='Tipo de Garantía'
          register={register}
          errors={errors}
        />

        <FormSelect
          id='status'
          label='Estado'
          register={register}
          errors={errors}
          options={statusOptions}
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
          {loading ? 'Procesando...' : 'Crear Dispositivo'}
        </Button>
      </div>
    </form>
  );
}
