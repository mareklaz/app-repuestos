'use client';
import ButtonBack from '@/components/buttons/ButtonBack';
import DeviceForm from '@/components/forms/DeviceForm';
import PageHeader from '@/components/PageHeader';

export default function CreateDevicePage() {
  return (
    <div>
      <PageHeader title='Crear Dispositivo'>
        <ButtonBack />
      </PageHeader>
      <div className='mx-auto max-w-5xl'>
        <DeviceForm />
      </div>
    </div>
  );
}
