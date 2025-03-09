'use client';

import { useEffect } from 'react';

export default function Error({ error }) {
  useEffect(() => {
    console.error('Error capturado:', error);
  }, [error]);

  return (
    <div className='flex flex-col items-center gap-4'>
      <h2 className='text-2xl font-semibold text-zinc-900'>¡Algo salió mal!</h2>
      <p className='text-lg text-zinc-600'>{error.message}</p>
    </div>
  );
}
