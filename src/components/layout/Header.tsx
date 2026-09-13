import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/content';
import type { HeaderProps } from '../../types';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Header({ links = NAV_LINKS }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-line-light/80 bg-surface-light/90 backdrop-blur-md dark:border-line-dark/80 dark:bg-surface-dark/90'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-secondary-light transition-colors hover:text-brand-500 dark:text-ink-secondary-dark dark:hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button
            size="sm"
            onClick={() => {
              document.getElementById('lista-espera')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Unirme
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line-light bg-surface-light text-ink-primary-light dark:border-line-dark dark:bg-surface-dark dark:text-ink-primary-dark"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-line-light bg-surface-light px-4 py-4 md:hidden dark:border-line-dark dark:bg-surface-dark"
        >
          <nav className="flex flex-col gap-3" aria-label="Móvil">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-ink-primary-light hover:bg-app-light dark:text-ink-primary-dark dark:hover:bg-app-dark"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-2 w-full"
              onClick={() => {
                setIsOpen(false);
                document.getElementById('lista-espera')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Unirme a la lista
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
