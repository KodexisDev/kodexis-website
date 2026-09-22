import { AtSign, CarFront, Globe, MapPin, Route, Share2, Users } from 'lucide-react';
import type { FeatureItem, NavLink, SocialLink } from '../types';

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { label: 'Producto', href: '#producto' },
  { label: 'Demo', href: '#demo' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Lista de espera', href: '#lista-espera' },
  { label: 'PQRS', href: '#pqrs' },
];

export const FEATURES: ReadonlyArray<FeatureItem> = [
  {
    id: 'connect',
    title: 'Conéctate en segundos',
    description:
      'Solicita un viaje al instante y encuentra conductores cercanos sin fricción ni esperas innecesarias.',
    icon: MapPin,
  },
  {
    id: 'safety',
    title: 'Viaja seguro',
    description:
      'Seguimiento en tiempo real, verificación de identidad y protocolos pensados para cada trayecto.',
    icon: CarFront,
  },
  {
    id: 'reach',
    title: 'Llega más lejos',
    description:
      'Rutas dinámicas que optimizan tiempos y te llevan a tu destino con claridad en cada kilómetro.',
    icon: Route,
  },
  {
    id: 'city',
    title: 'Movemos tu ciudad',
    description:
      'Una red de pasajeros y conductores que transforma la movilidad urbana con tecnología Kodexis.',
    icon: Users,
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
