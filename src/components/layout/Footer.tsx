import { CONTACT } from '../../data/content';
import type { FooterProps } from '../../types';
import { Logo } from '../ui/Logo';

export function Footer({ socialLinks }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-light bg-surface-light dark:border-line-dark dark:bg-surface-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-3">
          <Logo size="sm" />
          <p className="max-w-sm text-sm text-ink-secondary-light dark:text-ink-secondary-dark">
            Innovación · Tecnología · Crecimiento. Construyendo el futuro de la movilidad con
            Trazza.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-secondary-light dark:text-ink-secondary-dark">
            Contáctanos
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map(({ id, label, href, icon: Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-xl border border-line-light px-3 py-2 text-sm text-ink-secondary-light transition-colors hover:border-brand-500 hover:text-brand-500 dark:border-line-dark dark:text-ink-secondary-dark"
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {id === 'instagram'
                    ? CONTACT.instagramHandle
                    : id === 'whatsapp'
                      ? CONTACT.whatsappDisplay
                      : label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line-light dark:border-line-dark">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-ink-secondary-light sm:px-6 lg:px-8 dark:text-ink-secondary-dark">
          © {year} Kodexis. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
