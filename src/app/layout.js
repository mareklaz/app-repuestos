import './styles/globals.css';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/SessionProvider';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'APP-Repuestos',
  description: 'APP-Repuestos',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang='en'>
      <body>
        <SessionProvider session={session}>
          <MainLayout>{children}</MainLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
