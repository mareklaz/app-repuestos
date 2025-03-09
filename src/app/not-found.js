import LinkButton from '@/components/buttons/LinkButton';

export default function NotFound() {
  return (
    <>
      <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-zinc-600'>404</p>
          <h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-7xl'>
            Página no encontrada
          </h1>
          <p className='mt-6 text-lg font-medium text-pretty text-zinc-500 sm:text-xl/8'>
            Lo sentimos, la página que buscas no existe.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <LinkButton href='/dashboard'>Volver al Dashboard</LinkButton>
          </div>
        </div>
      </main>
    </>
  );
}
