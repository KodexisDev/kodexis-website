import type { ButtonProps } from '../../types';

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-500 shadow-soft',
  secondary:
    'bg-surface-light text-ink-primary-light border border-line-light hover:bg-app-light dark:bg-surface-dark dark:text-ink-primary-dark dark:border-line-dark dark:hover:bg-app-dark',
  ghost:
    'bg-transparent text-ink-secondary-light hover:text-ink-primary-light hover:bg-black/5 dark:text-ink-secondary-dark dark:hover:text-ink-primary-dark dark:hover:bg-white/5',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
