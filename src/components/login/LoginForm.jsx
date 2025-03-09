'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconBuildingWarehouse } from '@tabler/icons-react';
import { loginSchema } from '@/validations/authSchema';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setError(null);

    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className='flex min-h-full flex-col items-center justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <div className='flex items-center justify-center'>
          <IconBuildingWarehouse className='size-12 text-zinc-600' />
        </div>
        <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-zinc-900'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-10 w-full sm:mx-auto sm:w-full sm:max-w-sm'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div>
            <label htmlFor='email' className='block text-sm/6 text-zinc-900'>
              Correo electrónico
            </label>
            <div className='mt-2'>
              <input
                id='email'
                type='email'
                {...register('email')}
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-zinc-900 outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
              {errors.email && (
                <p className='mt-2 text-sm text-red-600'>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm/6 text-zinc-900'
              >
                Contraseña
              </label>
              <div className='text-sm'>
                <a
                  href='#'
                  className='font-semibold text-indigo-600 hover:text-indigo-500'
                >
                  Olvidaste la contraseña?
                </a>
              </div>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                type='password'
                {...register('password')}
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-zinc-900 outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
              {errors.password && (
                <p className='mt-2 text-sm text-red-600'>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign in
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm/6 text-zinc-500'>
          Not a member?{' '}
          <a
            href='#'
            className='font-semibold text-indigo-600 hover:text-indigo-500'
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
