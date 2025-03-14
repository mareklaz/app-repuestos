'use client';
import { IconEdit, IconEyeSearch, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';
import { deletePart } from '@/actions/partsActions';
import Button from '../buttons/Button';
import LinkButton from '../buttons/LinkButton';

export default function PartTable({ parts }) {
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
              className='hidden px-3 py-3.5 text-left text-sm font-semibold text-zinc-900 sm:table-cell'
            >
              Nombre
            </th>
            <th
              scope='col'
              className='hidden px-3 py-3.5 text-left text-sm font-semibold text-zinc-900 lg:table-cell'
            >
              Descripcion
            </th>

            <th scope='col' className='relative py-3.5 pr-4 pl-3 sm:pr-0'>
              <span className='sr-only'>Editar</span>
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-zinc-200 bg-white'>
          {parts.map((part) => (
            <tr key={part.id}>
              <td className='py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-zinc-600 hover:text-zinc-900 sm:pl-0'>
                <Link
                  href={`/parts/${part.id}`}
                  className='flex items-center gap-2 text-zinc-600 hover:text-zinc-900'
                >
                  <IconEyeSearch className='size-5' />
                  {part.sn}
                </Link>
              </td>
              <td className='hidden px-3 py-4 text-sm whitespace-nowrap text-zinc-500 sm:table-cell'>
                {part.name}
              </td>
              <td className='hidden px-3 py-4 text-sm whitespace-nowrap text-zinc-500 lg:table-cell'>
                {part.description}
              </td>
              <td className='flex items-center justify-end gap-2 py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0'>
                <LinkButton
                  href={`/parts/${part.id}/edit`}
                  variant='secondary'
                  className='flex items-center justify-end gap-2 text-zinc-600 hover:text-zinc-900'
                >
                  <IconEdit className='size-5' />
                  <span className='hidden sm:block'>Editar</span>
                </LinkButton>
                <Button
                  onClick={() => deletePart(part.id)}
                  variant='secondary'
                  className='flex items-center justify-end gap-2 text-red-600 hover:text-red-900'
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
