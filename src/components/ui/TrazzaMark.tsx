import type { TrazzaMarkProps } from '../../types';

const sizeClasses: Record<NonNullable<TrazzaMarkProps['size']>, string> = {
  sm: 'text-xl tracking-[0.12em]',
  md: 'text-3xl tracking-[0.14em] sm:text-4xl',
  lg: 'text-4xl tracking-[0.16em] sm:text-5xl',
};

export function TrazzaMark({ className = '', size = 'md', showTagline = true }: TrazzaMarkProps) {
  return (
    <div className={['inline-flex flex-col items-start', className].join(' ')}>
      <span
        className={[
          'font-display font-extrabold uppercase text-ink-primary-light dark:text-ink-primary-dark',
          sizeClasses[size],
        ].join(' ')}
      >
        Tra<span className="text-brand-500">zz</span>a
      </span>
      {showTagline ? (
        <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-ink-secondary-light dark:text-ink-secondary-dark sm:text-xs">
          Ruta dinámica
        </span>
      ) : null}
    </div>
  );
}
