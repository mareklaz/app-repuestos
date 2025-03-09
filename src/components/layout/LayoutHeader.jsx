'use client';
import { IconMenu3, IconPower, IconUser } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import Button from '../buttons/Button';
import { signOut } from 'next-auth/react';

export default function LayoutHeader({ setSidebarOpen }) {
  const pathname = usePathname();

  let headerTitle = '';
  if (pathname.startsWith('/dashboard')) {
    headerTitle = 'Dashboard';
  } else if (pathname.startsWith('/repairs')) {
    headerTitle = 'Averías';
  } else if (pathname.startsWith('/devices')) {
    headerTitle = 'Dispositivos';
  } else if (pathname.startsWith('/parts')) {
    headerTitle = 'Piezas';
  } else if (pathname.startsWith('/clients')) {
    headerTitle = 'Clientes';
  } else {
    headerTitle = 'APP Repuestos';
  }

  return (
    <div className='sticky top-0 z-40 flex items-center gap-x-6 bg-zinc-800 px-4 py-4 shadow-sm sm:px-6 lg:hidden'>
      <button
        type='button'
        onClick={() => setSidebarOpen(true)}
        className='-m-2.5 p-2.5 text-zinc-200 lg:hidden'
      >
        <span className='sr-only'>Open sidebar</span>
        <IconMenu3 aria-hidden='true' className='size-6' />
      </button>
      <div className='flex-1 text-sm/6 font-semibold text-white'>
        {headerTitle}
      </div>
    </div>
  );
}
