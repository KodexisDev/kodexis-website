import { AtSign, Globe, Headphones, MapPinned, Share2, ShieldCheck, Wallet } from 'lucide-react';
import type { FeatureItem, NavLink, SocialLink } from '../types';

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { label: 'Producto', href: '#producto' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Lista de espera', href: '#lista-espera' },
];

export const FEATURES: ReadonlyArray<FeatureItem> = [
  {
    id: 'safety',
    title: 'Viajes seguros',
    description:
      'Verificación de identidad, seguimiento en tiempo real y protocolos de seguridad pensados para cada trayecto.',
    icon: ShieldCheck,
  },
  {
    id: 'payments',
    title: 'Pagos transparentes',
    description:
      'Tarifas claras antes de confirmar, sin sorpresas al llegar. Historial completo y comprobantes al instante.',
    icon: Wallet,
  },
  {
    id: 'support',
    title: 'Soporte 24/7',
    description:
      'Asistencia humana cuando la necesites. Resolución rápida para pasajeros y conductores, a cualquier hora.',
    icon: Headphones,
  },
  {
    id: 'routing',
    title: 'Rutas inteligentes',
    description:
      'Optimización de trayectos con datos en vivo para reducir tiempos de espera y mejorar la experiencia urbana.',
    icon: MapPinned,
  },
];

export const SOCIAL_LINKS: ReadonlyArray<SocialLink> = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: Globe,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: AtSign,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: Share2,
  },
];
