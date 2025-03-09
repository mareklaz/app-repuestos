import { IconCircleCheckFilled } from '@tabler/icons-react';

export default function SuccessAlert({ message }) {
  return (
    <div className='rounded-md bg-green-50 p-4'>
      <div className='flex'>
        <div className='shrink-0'>
          <IconCircleCheckFilled
            aria-hidden='true'
            className='size-5 text-green-400'
          />
        </div>
        <div className='ml-3'>
          <div className='text-sm text-green-700'>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
