import { cn } from '../../lib/utils';

export default function Button({
  children,
  onClick,
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
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
