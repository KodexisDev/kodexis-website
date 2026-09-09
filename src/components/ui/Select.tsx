import type { SelectProps } from '../../types';

export function Select({
  label,
  id,
  options,
  error,
  className = '',
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <label className="flex w-full flex-col gap-1.5" htmlFor={selectId}>
      <span className="text-sm font-medium text-ink-primary-light dark:text-ink-primary-dark">{label}</span>
      <select
        id={selectId}
        className={[
          'h-11 w-full rounded-xl border bg-surface-light px-3 text-sm text-ink-primary-light transition-colors dark:bg-surface-dark dark:text-ink-primary-dark',
          error
            ? 'border-semantic-danger focus-visible:ring-semantic-danger'
            : 'border-line-light focus-visible:border-brand-500 dark:border-line-dark',
          className,
        ].join(' ')}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className="text-xs text-semantic-danger">{error}</span> : null}
    </label>
  );
}
