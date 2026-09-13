import type { ProductDemoProps } from '../../types';
import { DemoVideo } from '../ui/DemoVideo';
import { TrazzaMark } from '../ui/TrazzaMark';

export function ProductDemo({ videoSrc, posterSrc, brandImageSrc }: ProductDemoProps) {
  return (
    <section
      id="demo"
      className="bg-app-light py-20 dark:bg-app-dark sm:py-24"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <TrazzaMark size="md" className="mx-auto items-center" />
          <h2
            id="demo-heading"
            className="mt-6 font-display text-3xl font-semibold text-ink-primary-light sm:text-4xl dark:text-ink-primary-dark"
          >
            Así funciona Trazza
          </h2>
          <p className="mt-3 text-base text-ink-secondary-light dark:text-ink-secondary-dark">
            Un vistazo rápido a la experiencia de movilidad: rutas claras, solicitud simple y
            seguimiento en tiempo real.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <DemoVideo
            src={videoSrc}
            poster={posterSrc}
            className="animate-fade-up"
            label="Demostración rápida del funcionamiento de Trazza"
          />

          <figure className="animate-fade-in overflow-hidden rounded-2xl border border-line-light bg-white shadow-soft dark:border-line-dark dark:bg-surface-dark">
            <img
              src={brandImageSrc}
              alt="Identidad visual de Trazza: logo, app móvil y valores de movilidad"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="border-t border-line-light px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-ink-secondary-light dark:border-line-dark dark:text-ink-secondary-dark">
              Identidad Trazza · Ruta dinámica
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
