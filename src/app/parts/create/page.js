'use client';
import Button from '@/components/buttons/Button';
import PartForm from '@/components/forms/PartForm';
import PageHeader from '@/components/PageHeader';
import { IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function CreatePartsPage() {
  const { back } = useRouter();

  return (
    <div>
      <PageHeader title='Crear Pieza'>
        <Button
          onClick={back}
          variant='secondary'
          className='flex items-center gap-2'
        >
          <IconArrowLeft className='size-5' />
          Volver
        </Button>
      </PageHeader>
      <div className='mx-auto max-w-5xl'>
        <PartForm />
      </div>
    </div>
  );
}
