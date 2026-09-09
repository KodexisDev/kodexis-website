import { NAV_LINKS, SOCIAL_LINKS } from '../../data/content';
import type { LayoutProps } from '../../types';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-app-light text-ink-primary-light transition-colors duration-300 dark:bg-app-dark dark:text-ink-primary-dark">
      <Header links={NAV_LINKS} />
      <main>{children}</main>
      <Footer socialLinks={SOCIAL_LINKS} />
    </div>
  );
}
