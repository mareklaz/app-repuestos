'use client';
import { IconEdit, IconEyeSearch, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';
import { deleteDevice } from '@/actions/deviceActions';
import Button from '../buttons/Button';
import LinkButton from '../buttons/LinkButton';

export default function DeviceTable({ devices }) {
  return (
    <div className='-mx-4 mt-8 sm:-mx-0'>
      <table className='min-w-full divide-y divide-zinc-300'>
        <thead>
          <tr>
            <th
              scope='col'
              className='py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-zinc-900 sm:pl-0'
            >
              Nº Serie
            </th>
            <th
              scope='col'
              className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
            >
              Nombre
            </th>
            <th
              scope='col'
              className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
            >
              Modelo
            </th>
            <th
              scope='col'
              className='hidden px-3 py-3.5 text-left text-sm font-semibold text-zinc-900 lg:table-cell'
            >
              Fabricante
            </th>
            <th
              scope='col'
              className='hidden px-3 py-3.5 text-left text-sm font-semibold text-zinc-900 xl:table-cell'
            >
              Descripción
            </th>
            <th scope='col' className='relative py-3.5 pr-4 pl-3 sm:pr-0'>
              <span className='sr-only'>Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-zinc-200 bg-white'>
          {devices.map((device) => (
            <tr key={device.id}>
              <td className='py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-zinc-600 hover:text-zinc-900 sm:pl-0'>
                <Link
                  href={`/devices/${device.id}`}
                  className='flex items-center gap-2 text-zinc-600 hover:text-zinc-900'
                >
                  <IconEyeSearch className='size-5' />
                  {device.sn}
                </Link>
              </td>
              <td className='px-3 py-4 text-sm whitespace-nowrap text-zinc-500'>
                {device.name}
              </td>
              <td className='px-3 py-4 text-sm whitespace-nowrap text-zinc-500'>
                {device.model}
              </td>
              <td className='hidden px-3 py-4 text-sm whitespace-nowrap text-zinc-500 lg:table-cell'>
                {device.manufacturer}
              </td>
              <td className='hidden px-3 py-4 text-sm whitespace-nowrap text-zinc-500 xl:table-cell'>
                {device.description}
              </td>
              <td className='flex items-center justify-end gap-2 py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0'>
                <LinkButton
                  href={`/devices/${device.id}/edit`}
                  variant='secondary'
                  className='flex items-center gap-2 text-zinc-600 hover:text-zinc-900'
                >
                  <IconEdit className='size-5' />
                  <span className='hidden sm:block'>Editar</span>
                </LinkButton>
                <Button
                  onClick={() => deleteDevice(device.id)}
                  variant='secondary'
                  className='flex items-center gap-2 text-red-600 hover:text-red-900'
                >
                  <IconTrash className='size-5' />
                  <span className='hidden sm:block'>Eliminar</span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
