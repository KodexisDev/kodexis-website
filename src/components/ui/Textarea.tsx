import type { TextareaProps } from '../../types';

export function Textarea({ label, id, error, className = '', rows = 5, ...props }: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <label className="flex w-full flex-col gap-1.5" htmlFor={textareaId}>
      <span className="text-sm font-medium text-ink-primary-light dark:text-ink-primary-dark">{label}</span>
      <textarea
        id={textareaId}
        rows={rows}
        className={[
          'w-full resize-y rounded-xl border bg-surface-light px-3 py-2.5 text-sm text-ink-primary-light placeholder:text-ink-secondary-light transition-colors dark:bg-surface-dark dark:text-ink-primary-dark dark:placeholder:text-ink-secondary-dark',
          error
            ? 'border-semantic-danger focus-visible:ring-semantic-danger'
            : 'border-line-light focus-visible:border-brand-500 dark:border-line-dark',
          className,
        ].join(' ')}
        {...props}
      />
      {error ? <span className="text-xs text-semantic-danger">{error}</span> : null}
    </label>
  );
}
