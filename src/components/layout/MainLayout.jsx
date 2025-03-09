'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import LayoutHeader from './LayoutHeader';
import Sidebar from './Sidebar';

export default function MainLayout({ children }) {
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!session) {
    return <div className='px-4 sm:px-6 lg:px-8'>{children}</div>;
  }

  return (
    <>
      <LayoutHeader setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className='py-10 lg:pl-72'>
        <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
      </main>
    </>
  );
}
