interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <a
      href="#inicio"
      className={['inline-flex items-center gap-2.5 text-ink-primary-light dark:text-ink-primary-dark', className].join(
        ' ',
      )}
      aria-label="Kodexis"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
          <path
            d="M4 16.5 12 5l8 11.5H4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M8.2 16.5h7.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
      {showWordmark ? (
        <span className="font-display text-xl font-bold tracking-tight">
          Kode<span className="text-brand-500">xis</span>
        </span>
      ) : null}
    </a>
  );
}
