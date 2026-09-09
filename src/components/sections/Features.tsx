import type { FeaturesProps } from '../../types';
import { FeatureCard } from '../ui/FeatureCard';

export function Features({ items }: FeaturesProps) {
  return (
    <section
      id="caracteristicas"
      className="bg-app-light py-20 dark:bg-app-dark sm:py-24"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-heading"
            className="font-display text-3xl font-semibold text-ink-primary-light sm:text-4xl dark:text-ink-primary-dark"
          >
            Características de Trazza
          </h2>
          <p className="mt-3 text-base text-ink-secondary-light dark:text-ink-secondary-dark">
            Todo lo que necesitas para moverte con confianza, claridad y control en cada viaje.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
