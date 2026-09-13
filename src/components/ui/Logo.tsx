import { useTheme } from '../../contexts/ThemeContext';
import { BRAND_ASSETS } from '../../data/assets';
import type { BrandLogoProps } from '../../types';

const sizeClasses: Record<NonNullable<BrandLogoProps['size']>, string> = {
  sm: 'h-10 sm:h-11',
  md: 'h-14 sm:h-16',
  lg: 'h-24 sm:h-28',
};

export function Logo({ className = '', size = 'sm', href = '#inicio' }: BrandLogoProps) {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? BRAND_ASSETS.kodexisLogoDark : BRAND_ASSETS.kodexisLogo;

  return (
    <a
      href={href}
      className={['inline-flex items-center transition-opacity hover:opacity-90', className].join(' ')}
      aria-label="Kodexis — Innovación, tecnología y crecimiento"
    >
      <img
        key={logoSrc}
        src={logoSrc}
        alt="Kodexis"
        className={['w-auto object-contain', sizeClasses[size]].join(' ')}
        decoding="async"
      />
    </a>
  );
}
