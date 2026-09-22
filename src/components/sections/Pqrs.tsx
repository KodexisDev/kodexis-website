import { useState, type FormEvent } from 'react';
import { CheckCircle2, LoaderCircle, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '../../config/contact';
import type { PqrsFormData, PqrsProps, PqrsType } from '../../types';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';

const TYPE_OPTIONS: ReadonlyArray<{ value: string; label: string }> = [
  { value: '', label: 'Selecciona el tipo' },
  { value: 'peticion', label: 'Petición' },
  { value: 'queja', label: 'Queja' },
  { value: 'reclamo', label: 'Reclamo' },
  { value: 'sugerencia', label: 'Sugerencia' },
];

interface FormErrors {
  type?: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialForm: PqrsFormData = {
  type: '',
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function Pqrs({ onSubmit }: PqrsProps) {
  const [form, setForm] = useState<PqrsFormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.type) {
      nextErrors.type = 'Selecciona el tipo de PQRS';
    }

    if (!form.name.trim()) {
      nextErrors.name = 'Ingresa tu nombre';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Ingresa tu email';
    } else if (!isValidEmail(form.email.trim())) {
      nextErrors.email = 'Email no válido';
    }

    if (!form.subject.trim()) {
      nextErrors.subject = 'Ingresa un asunto';
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Describe tu solicitud';
    } else if (form.message.trim().length < 20) {
      nextErrors.message = 'Cuéntanos un poco más (mínimo 20 caracteres)';
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSubmitError(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: PqrsFormData = {
        ...form,
        type: form.type as PqrsType,
      };

      await onSubmit(payload);
      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Ocurrió un error al enviar tu PQRS. Intenta de nuevo.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="pqrs"
      className="bg-app-light py-20 dark:bg-app-dark sm:py-24"
      aria-labelledby="pqrs-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-line-light bg-surface-light p-6 shadow-soft dark:border-line-dark dark:bg-surface-dark sm:p-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-500">
              Atención al usuario
            </p>
            <h2
              id="pqrs-heading"
              className="mt-2 font-display text-3xl font-semibold text-ink-primary-light dark:text-ink-primary-dark"
            >
              Canal PQRS
            </h2>
            <p className="mt-2 text-sm text-ink-secondary-light dark:text-ink-secondary-dark">
              Envía peticiones, quejas, reclamos o sugerencias. Tu mensaje llega al correo de
              contacto de Kodexis.
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-secondary-light dark:text-ink-secondary-dark">
              <Mail className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
              {CONTACT_EMAIL}
            </p>
          </div>

          {submitted ? (
            <div
              className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-semantic-success/30 bg-semantic-success/10 px-4 py-6 text-center"
              role="status"
            >
              <CheckCircle2 className="h-8 w-8 text-semantic-success" aria-hidden="true" />
              <p className="font-medium text-ink-primary-light dark:text-ink-primary-dark">
                PQRS registrada. Te contactaremos pronto.
              </p>
              <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
                Enviar otra solicitud
              </Button>
            </div>
          ) : (
            <form className="mt-8 space-y-4" onSubmit={(event) => void handleSubmit(event)} noValidate>
              <Select
                label="Tipo de solicitud"
                name="type"
                options={TYPE_OPTIONS}
                value={form.type}
                error={errors.type}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    type: event.target.value as PqrsType | '',
                  }))
                }
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Nombre"
                  name="name"
                  autoComplete="name"
                  placeholder="Tu nombre completo"
                  value={form.name}
                  error={errors.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  error={errors.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                />
              </div>
              <Input
                label="Teléfono (opcional)"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+57 300 000 0000"
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
              />
              <Input
                label="Asunto"
                name="subject"
                placeholder="Resumen de tu solicitud"
                value={form.subject}
                error={errors.subject}
                onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
              />
              <Textarea
                label="Mensaje"
                name="message"
                placeholder="Cuéntanos los detalles de tu petición, queja, reclamo o sugerencia."
                value={form.message}
                error={errors.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              />

              {submitError ? (
                <p className="text-sm text-semantic-danger" role="alert">
                  {submitError}
                </p>
              ) : null}

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
                    Enviando…
                  </>
                ) : (
                  'Enviar PQRS'
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
