import type { LucideIcon } from 'lucide-react';
import type {
  ButtonHTMLAttributes,
  FormEvent,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

export type ThemeMode = 'light' | 'dark';

export type WaitlistRole = 'pasajero' | 'conductor';

export type PqrsType = 'peticion' | 'queja' | 'reclamo' | 'sugerencia';

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface WaitlistFormData {
  name: string;
  email: string;
  role: WaitlistRole | '';
}

export interface PqrsFormData {
  type: PqrsType | '';
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

export interface ThemeToggleProps {
  className?: string;
}

export interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export interface TrazzaMarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export interface DemoVideoProps {
  src: string;
  poster?: string;
  className?: string;
  label?: string;
}

export interface ProductDemoProps {
  videoSrc: string;
  posterSrc: string;
  brandImageSrc: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  error?: string;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export interface HeaderProps {
  links: ReadonlyArray<NavLink>;
}

export interface HeroProps {
  onCtaClick: () => void;
}

export interface FeaturesProps {
  items: ReadonlyArray<FeatureItem>;
}

export interface WaitlistProps {
  onSubmit: (data: WaitlistFormData) => void;
}

export interface PqrsProps {
  onSubmit: (data: PqrsFormData) => Promise<void> | void;
}

export interface FooterProps {
  socialLinks: ReadonlyArray<SocialLink>;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
}

export type WaitlistSubmitHandler = (event: FormEvent<HTMLFormElement>) => void;
