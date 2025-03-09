import React from 'react';
import { cn } from '../../lib/utils';

export default function FormSelect({
  id,
  label,
  options,
  register,
  errors,
  children,
  className,
  ...props
}) {
  return (
    <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
      <label
        htmlFor={id}
        className='block text-sm font-medium text-gray-900 sm:pt-1.5'
      >
        {label}
      </label>
      <div className='mt-2 sm:col-span-2 sm:mt-0'>
        <select
          id={id}
          {...register(id)}
          {...props}
          className={cn(
            'block w-full rounded-md border border-gray-300 bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-600 sm:max-w-md',
            className,
          )}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className='mt-2'>{children}</div>
        {errors[id] && (
          <p className='mt-2 text-sm text-red-600'>{errors[id].message}</p>
        )}
      </div>
    </div>
  );
}
