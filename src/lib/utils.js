import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Función para combinar clases de Tailwind y clases personalizadas
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Formatos de moneda y fecha
export function formatCurrency(amount) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('es-ES').format(new Date(date));
}
