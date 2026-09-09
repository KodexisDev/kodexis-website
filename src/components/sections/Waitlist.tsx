import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { WaitlistFormData, WaitlistProps, WaitlistRole } from '../../types';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

const ROLE_OPTIONS: ReadonlyArray<{ value: string; label: string }> = [
  { value: '', label: 'Selecciona tu rol' },
  { value: 'pasajero', label: 'Pasajero' },
  { value: 'conductor', label: 'Conductor' },
];

interface FormErrors {
  name?: string;
  email?: string;
  role?: string;
}

const initialForm: WaitlistFormData = {
  name: '',
  email: '',
  role: '',
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function Waitlist({ onSubmit }: WaitlistProps) {
  const [form, setForm] = useState<WaitlistFormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Ingresa tu nombre';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Ingresa tu email';
    } else if (!isValidEmail(form.email.trim())) {
      nextErrors.email = 'Email no válido';
    }

    if (!form.role) {
      nextErrors.role = 'Selecciona un rol';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    onSubmit(form);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section
      id="lista-espera"
      className="bg-app-light py-20 dark:bg-app-dark sm:py-24"
      aria-labelledby="waitlist-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-2xl border border-line-light bg-surface-light p-6 shadow-soft dark:border-line-dark dark:bg-surface-dark sm:p-8">
          <div className="text-center">
            <h2
              id="waitlist-heading"
              className="font-display text-3xl font-semibold text-ink-primary-light dark:text-ink-primary-dark"
            >
              Únete a la lista de espera
            </h2>
            <p className="mt-2 text-sm text-ink-secondary-light dark:text-ink-secondary-dark">
              Sé de los primeros en probar Trazza cuando lancemos en tu ciudad.
            </p>
          </div>

          {submitted ? (
            <div
              className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-semantic-success/30 bg-semantic-success/10 px-4 py-6 text-center"
              role="status"
            >
              <CheckCircle2 className="h-8 w-8 text-semantic-success" aria-hidden="true" />
              <p className="font-medium text-ink-primary-light dark:text-ink-primary-dark">
                ¡Listo! Te avisaremos pronto.
              </p>
              <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
                Registrar otro correo
              </Button>
            </div>
          ) : (
            <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
              <Input
                label="Nombre"
                name="name"
                autoComplete="name"
                placeholder="Tu nombre"
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
              <Select
                label="Rol"
                name="role"
                options={ROLE_OPTIONS}
                value={form.role}
                error={errors.role}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    role: event.target.value as WaitlistRole | '',
                  }))
                }
              />
              <Button type="submit" className="w-full" size="lg">
                Quiero acceso anticipado
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
