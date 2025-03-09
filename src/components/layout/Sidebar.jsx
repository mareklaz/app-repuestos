'use client';

import { usePathname } from 'next/navigation';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import {
  IconAlertSquare,
  IconBuildingWarehouse,
  IconCpu,
  IconDashboard,
  IconDeviceGamepad,
  IconPower,
  IconUser,
  IconX,
} from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Button from '../buttons/Button';
import { signOut } from 'next-auth/react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: IconDashboard },
  { name: 'Averías', href: '/repairs', icon: IconAlertSquare },
  { name: 'Dispositivos', href: '/devices', icon: IconDeviceGamepad },
  { name: 'Piezas', href: '/parts', icon: IconCpu },
  { name: 'Clientes', href: '/clients', icon: IconUser },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();

  return (
    <>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className='relative z-50 lg:hidden'
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0'
        />

        <div className='fixed inset-0 flex'>
          <DialogPanel
            transition
            className='relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full'
          >
            <TransitionChild>
              <div className='absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0'>
                <button
                  type='button'
                  onClick={() => setSidebarOpen(false)}
                  className='-m-2.5 p-2.5'
                >
                  <span className='sr-only'>Close sidebar</span>
                  <IconX aria-hidden='true' className='size-6 text-white' />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar para mobile */}
            <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-800 px-6 pb-2'>
              <div className='flex h-16 shrink-0 items-center'>
                <IconBuildingWarehouse className='h-8 w-auto text-white' />
              </div>
              <nav className='flex flex-1 flex-col'>
                <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                  <li>
                    <ul role='list' className='-mx-2 space-y-2'>
                      {navigation.map((item) => {
                        const isCurrent = pathname === item.href;
                        return (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={() => setSidebarOpen(false)}
                              className={cn(
                                isCurrent
                                  ? 'bg-zinc-700 text-white'
                                  : 'text-zinc-200 hover:bg-zinc-500 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon
                                aria-hidden='true'
                                className={cn(
                                  isCurrent
                                    ? 'text-white'
                                    : 'text-zinc-200 group-hover:text-white',
                                  'size-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                  <li className='-mx-6 mt-auto p-4'>
                    <Button
                      onClick={() => signOut()}
                      className='flex w-full items-center gap-2 bg-red-700'
                    >
                      <IconPower className='size-6' />
                      Cerrar Sesión
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Sidebar estático para desktop */}
      <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
        <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-800 px-6'>
          <div className='flex h-16 shrink-0 items-center'>
            <IconBuildingWarehouse className='h-8 w-auto text-white' />
          </div>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='-mx-2 space-y-2'>
                  {navigation.map((item) => {
                    const isCurrent = pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            isCurrent
                              ? 'bg-zinc-700 text-white'
                              : 'text-zinc-200 hover:bg-zinc-500 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden='true'
                            className={cn(
                              isCurrent
                                ? 'text-white'
                                : 'text-zinc-200 group-hover:text-white',
                              'size-6 shrink-0',
                            )}
                          />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className='-mx-6 mt-auto p-4'>
                <Button
                  onClick={() => signOut()}
                  className='flex w-full items-center gap-2 hover:bg-red-700'
                >
                  <IconPower className='size-6' />
                  Cerrar sesión
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
