import type { FeatureCardProps } from '../../types';

export function FeatureCard({ title, description, icon: Icon, index = 0 }: FeatureCardProps) {
  return (
    <article
      className="group animate-fade-up rounded-2xl border border-line-light bg-surface-light p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 dark:border-line-dark dark:bg-surface-dark"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-semibold text-ink-primary-light dark:text-ink-primary-dark">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-secondary-light dark:text-ink-secondary-dark">
        {description}
      </p>
    </article>
  );
}
