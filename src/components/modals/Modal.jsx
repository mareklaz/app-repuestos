'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Button from '../buttons/Button';
import { IconCpu } from '@tabler/icons-react';
import PartForm from '../forms/PartForm';

export default function Modal() {
  const [open, setOpen] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    // Aquí puedes manejar la lógica de desactivación
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant='primary'
        text='Open Modal'
      />
      <Dialog open={open} onClose={setOpen} className='relative z-50'>
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in'
        />

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <DialogPanel
              transition
              className='relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
            >
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='gap-4 sm:flex sm:items-center'>
                  <IconCpu className='h-6 w-auto text-indigo-600' />
                  <h2 className='text-lg font-semibold text-gray-900'>
                    Crear Piezas
                  </h2>
                </div>

                <div>
                  <PartForm onCancel={handleCancel} onCreate={handleCreate} />
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                <button
                  type='button'
                  onClick={() => setOpen(false)}
                  className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto'
                >
                  Crear pieza
                </button>
                <button
                  type='button'
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto'
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
