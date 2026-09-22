export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'contacto@kodexis.co';

/** Solo keys públicas de formulario; nunca credenciales de servidor. */
export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() || '';
