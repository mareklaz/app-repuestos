'use client';
import { IconArrowLeft } from '@tabler/icons-react';
import Button from './Button';
import { useRouter } from 'next/navigation';

export default function ButtonBack() {
  const { back } = useRouter();
  return (
    <Button
      onClick={back}
      variant='secondary'
      className='flex items-center gap-2'
    >
      <IconArrowLeft className='size-5' />
      Volver
    </Button>
  );
}
