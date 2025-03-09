'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { IconCheck, IconCpu, IconPlus, IconX } from '@tabler/icons-react';
import Button from '../buttons/Button';

export default function ModalCreate() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [error, setError] = useState('');

  // Maneja la ejecución de la función asincrónica
  const handleAction = async () => {
    setStatus('loading');
    setError('');

    try {
      // const result = await onConfirm();
      const result = { success: true, message: 'Éxito' }; // Simula una respuesta exitosa
      if (result?.success) {
        setStatus('success');
      } else {
        throw new Error(result?.message || errorMessage);
      }
    } catch (err) {
      setStatus('error');
      setError(err.message || errorMessage);
    }
  };

  // Cierra el modal y resetea los estados
  const closeDialog = () => {
    setOpen(false);
    setTimeout(() => {
      setStatus('idle');
      setError('');
    }, 300);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant='primary'
        text='Open Modal'
      />
      <Dialog open={open} onClose={closeDialog} className='relative z-50'>
        <DialogBackdrop className='fixed inset-0 bg-gray-500/75' />

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <DialogPanel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
              {/* Estado de éxito */}
              {status === 'success' ? (
                <div className='text-center'>
                  <div className='mx-auto flex size-12 items-center justify-center rounded-full bg-green-100'>
                    <IconCheck className='size-6 text-green-600' />
                  </div>
                  <DialogTitle
                    as='h3'
                    className='mt-3 text-base font-semibold text-gray-900'
                  >
                    Éxito
                  </DialogTitle>
                  <p className='mt-2 text-sm text-gray-500'>{successMessage}</p>
                  <button
                    onClick={closeDialog}
                    className='mt-5 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500'
                  >
                    Aceptar
                  </button>
                </div>
              ) : status === 'error' ? (
                <div className='text-center'>
                  <div className='mx-auto flex size-12 items-center justify-center rounded-full bg-red-100'>
                    <IconX className='size-6 text-red-600' />
                  </div>
                  <DialogTitle
                    as='h3'
                    className='mt-3 text-base font-semibold text-gray-900'
                  >
                    Error
                  </DialogTitle>
                  <p className='mt-2 text-sm text-gray-500'>{error}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className='mt-5 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500'
                  >
                    Volver a intentarlo
                  </button>
                </div>
              ) : (
                // Estado inicial y carga
                <div className='text-center'>
                  <div className='mx-auto flex size-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600'>
                    <IconCpu className='size-6' />
                  </div>
                  <DialogTitle
                    as='h3'
                    className='mt-3 text-base font-semibold text-gray-900'
                  >
                    Crear Parte
                  </DialogTitle>
                  <p className='mt-2 text-sm text-gray-500'>
                    Quieres crear una nueva pieza
                  </p>

                  <div className='mt-5 sm:mt-6'>
                    {status === 'loading' ? (
                      <button
                        disabled
                        className='inline-flex w-full justify-center rounded-md bg-indigo-600/50 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500/50'
                      >
                        Procesando...
                      </button>
                    ) : (
                      <div className='mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3'>
                        <button
                          onClick={() => closeDialog()}
                          className='rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50'
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={handleAction}
                          className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500'
                        >
                          Confirmar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
