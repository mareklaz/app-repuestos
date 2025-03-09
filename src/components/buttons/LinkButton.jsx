import Link from 'next/link';
import { cn } from '../../lib/utils';

export default function LinkButton({
  children,
  onClick,
  href,
  disabled,
  variant = 'primary',
  className,
  ...props
}) {
  const baseClasses =
    'cursor-pointer rounded-md px-3 py-2 text-sm font-semibold shadow-sm';
  const variants = {
    primary:
      'bg-zinc-600 text-white hover:bg-zinc-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-zinc-600',
    secondary:
      'bg-white text-zinc-900 ring-1 ring-zinc-300 ring-inset hover:bg-zinc-50',
  };

  return (
    <Link
      type='button'
      href={href}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
