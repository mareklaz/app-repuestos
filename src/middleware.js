import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Permitir el acceso si es una solicitud para la página de inicio o si el usuario tiene un token válido
  if (pathname === '/' || token) {
    return NextResponse.next();
  }

  // Redirigir a la página de inicio si el usuario no está autenticado
  return NextResponse.redirect(new URL('/', req.url));
}

// Configurar las rutas que deben ser protegidas por el middleware
export const config = {
  matcher: ['/dashboard/:path*'],
};
