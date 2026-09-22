const baseUrl = import.meta.env.BASE_URL;

function asset(path: string): string {
  return `${baseUrl}${path.replace(/^\//, '')}`;
}

export const BRAND_ASSETS = {
  kodexisLogo: asset('brand/kodexis-logo.png'),
  kodexisLogoDark: asset('brand/kodexis-logo-white.png'),
  trazzaBrand: asset('brand/trazza-brand.jpeg'),
  trazzaDemo: asset('brand/trazza-demo.mp4'),
} as const;
