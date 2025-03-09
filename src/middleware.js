import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

/**
 * Middleware para controlar el acceso a las rutas en función de la autenticación del usuario.
 *
 * Reglas:
 * - Si el usuario está autenticado (token existe):
 *     - Si accede a la página raíz ("/"), se redirige a "/dashboard".
 *     - Si accede a cualquier otra ruta, se le permite el acceso.
 * - Si el usuario no está autenticado (token no existe):
 *     - Se permite únicamente el acceso a la página raíz ("/").
 *     - Para cualquier otra ruta se redirige a "/".
 */
export async function middleware(req) {
  // Se obtiene el token de autenticación del request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Si el usuario está autenticado
  if (token) {
    // Redirige a "/dashboard" si intenta acceder a la página raíz
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    // Permite el acceso a cualquier otra ruta
    return NextResponse.next();
  } else {
    // Si el usuario no está autenticado:
    // Permite el acceso únicamente a la página raíz ("/")
    if (pathname === '/') {
      return NextResponse.next();
    }
    // Para cualquier otra ruta, redirige a la página raíz ("/")
    return NextResponse.redirect(new URL('/', req.url));
  }
}

/**
 * Configuración del middleware para que se aplique en todas las rutas excepto
 * aquellos archivos estáticos y recursos internos de Next.js.
 */
export const config = {
  matcher: [
    // Se excluyen rutas que no requieren autenticación como assets estáticos
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};
