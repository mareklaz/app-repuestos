import { XCircleIcon } from '@heroicons/react/24/outline';
import { IconError404, IconExclamationCircleFilled } from '@tabler/icons-react';

export default function ErrorAlert({ message }) {
  return (
    <div className='rounded-md bg-red-50 p-4'>
      <div className='flex'>
        <div className='shrink-0'>
          <IconExclamationCircleFilled
            aria-hidden='true'
            className='size-5 text-red-400'
          />
        </div>
        <div className='ml-3'>
          <div className='text-sm text-red-700'>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
