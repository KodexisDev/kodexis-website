import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import type { ThemeToggleProps } from '../../types';

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className={[
        'inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line-light bg-surface-light text-ink-primary-light transition-colors hover:border-brand-500/40 hover:text-brand-500 dark:border-line-dark dark:bg-surface-dark dark:text-ink-primary-dark dark:hover:text-brand-500',
        className,
      ].join(' ')}
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
  );
}
