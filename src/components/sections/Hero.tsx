import { ArrowRight } from 'lucide-react';
import type { HeroProps } from '../../types';
import { Button } from '../ui/Button';

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-hero-light dark:bg-hero-dark"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(217, 222, 229, 0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(217, 222, 229, 0.28) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 60% 35%, black 20%, transparent 75%)',
        }}
      />

      <div
        className="pointer-events-none absolute -right-24 top-24 h-[28rem] w-[28rem] animate-float rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/25 sm:-right-10 sm:top-16"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-3xl dark:bg-line-dark/60"
        aria-hidden="true"
      />

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-brand-500/25 dark:text-brand-500/20 sm:h-52"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 140 C 240 80, 360 180, 600 120 S 960 40, 1200 100 S 1380 160, 1440 120 L 1440 200 L 0 200 Z"
          fill="currentColor"
        />
        <path
          d="M0 160 C 280 110, 420 170, 680 130 S 1000 70, 1240 120 S 1380 150, 1440 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.7"
        />
      </svg>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-up" id="producto">
          <p className="font-display text-5xl font-bold tracking-tight text-ink-primary-light sm:text-6xl lg:text-7xl dark:text-ink-primary-dark">
            Kode<span className="text-brand-500">xis</span>
          </p>
          <h1 className="mt-5 max-w-xl text-balance font-display text-3xl font-semibold leading-tight text-ink-primary-light sm:text-4xl lg:text-5xl dark:text-ink-primary-dark">
            El futuro de la movilidad llega con{' '}
            <span className="text-brand-500">Trazza</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-secondary-light sm:text-lg dark:text-ink-secondary-dark">
            Plataforma avanzada de transporte que une pasajeros y conductores con seguridad,
            transparencia y rutas inteligentes.
          </p>
          <div className="mt-8 animate-fade-in" style={{ animationDelay: '180ms' }}>
            <Button size="lg" onClick={onCtaClick}>
              Unirme a la lista de espera
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
