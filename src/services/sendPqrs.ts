import { CONTACT_EMAIL, WEB3FORMS_ACCESS_KEY } from '../config/contact';
import type { PqrsFormData, PqrsType } from '../types';

export interface PqrsPayload extends Omit<PqrsFormData, 'type'> {
  type: PqrsType;
}

const PQRS_TYPE_LABELS: Record<PqrsType, string> = {
  peticion: 'Petición',
  queja: 'Queja',
  reclamo: 'Reclamo',
  sugerencia: 'Sugerencia',
};

export function getPqrsTypeLabel(type: PqrsType): string {
  return PQRS_TYPE_LABELS[type];
}

function buildMailtoUrl(data: PqrsPayload): string {
  const typeLabel = getPqrsTypeLabel(data.type);
  const subject = encodeURIComponent(`[PQRS] ${typeLabel}: ${data.subject.trim()}`);
  const body = encodeURIComponent(
    [
      `Tipo: ${typeLabel}`,
      `Nombre: ${data.name.trim()}`,
      `Email: ${data.email.trim()}`,
      `Teléfono: ${data.phone.trim() || 'No indicado'}`,
      `Asunto: ${data.subject.trim()}`,
      '',
      'Mensaje:',
      data.message.trim(),
    ].join('\n'),
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

async function sendWithWeb3Forms(data: PqrsPayload): Promise<void> {
  const typeLabel = getPqrsTypeLabel(data.type);
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      to: CONTACT_EMAIL,
      from_name: data.name.trim(),
      email: data.email.trim(),
      subject: `[PQRS] ${typeLabel}: ${data.subject.trim()}`,
      tipo_pqrs: typeLabel,
      nombre: data.name.trim(),
      telefono: data.phone.trim() || 'No indicado',
      asunto: data.subject.trim(),
      mensaje: data.message.trim(),
    }),
  });

  if (!response.ok) {
    throw new Error('No pudimos enviar tu PQRS. Intenta de nuevo en unos minutos.');
  }

  const result = (await response.json()) as Web3FormsResponse;

  if (!result.success) {
    throw new Error(result.message ?? 'No pudimos enviar tu PQRS. Intenta de nuevo.');
  }
}

export type PqrsSendResult =
  | { method: 'api' }
  | { method: 'mailto'; url: string };

export async function sendPqrs(data: PqrsPayload): Promise<PqrsSendResult> {
  if (WEB3FORMS_ACCESS_KEY) {
    await sendWithWeb3Forms(data);
    return { method: 'api' };
  }

  const url = buildMailtoUrl(data);
  window.location.href = url;
  return { method: 'mailto', url };
}
