import { ArrowRight } from 'lucide-react';
import type { HeroProps } from '../../types';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { TrazzaMark } from '../ui/TrazzaMark';

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
          maskImage: 'radial-gradient(ellipse 75% 65% at 55% 40%, black 15%, transparent 75%)',
        }}
      />

      <div
        className="pointer-events-none absolute -right-24 top-20 h-[28rem] w-[28rem] animate-float rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/25 sm:-right-8"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-8 h-64 w-64 rounded-full bg-kodexis-navy/10 blur-3xl dark:bg-line-dark/70"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-up" id="producto">
          <Logo size="lg" className="mb-8" />

          <TrazzaMark size="lg" className="mb-5" />

          <h1 className="max-w-xl text-balance font-display text-3xl font-semibold leading-tight text-ink-primary-light sm:text-4xl lg:text-[2.75rem] dark:text-ink-primary-dark">
            El futuro de la movilidad urbana, impulsado por Kodexis
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-secondary-light sm:text-lg dark:text-ink-secondary-dark">
            Conéctate en segundos, viaja seguro y llega más lejos. Trazza une pasajeros y
            conductores con rutas inteligentes y experiencia transparente.
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
