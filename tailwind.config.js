/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#FF6A00',
          600: '#F25C05',
        },
        app: {
          light: '#F7F8FA',
          dark: '#071421',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#0B1D2D',
        },
        ink: {
          primary: {
            light: '#101828',
            dark: '#FFFFFF',
          },
          secondary: {
            light: '#667085',
            dark: '#98A2B3',
          },
        },
        line: {
          light: '#D9DEE5',
          dark: '#15324A',
        },
        semantic: {
          success: '#16A34A',
          warning: '#F59E0B',
          danger: '#DC2626',
          info: '#2563EB',
        },
        kodexis: {
          navy: '#0D2A4F',
        },
      },
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -16px rgba(7, 20, 33, 0.18)',
        glow: '0 0 0 4px rgba(255, 106, 0, 0.18)',
      },
      spacing: {
        18: '4.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-light':
          'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(255, 106, 0, 0.14), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(37, 99, 235, 0.08), transparent 50%), linear-gradient(180deg, #F7F8FA 0%, #EEF1F5 100%)',
        'hero-dark':
          'radial-gradient(ellipse 80% 60% at 70% 15%, rgba(255, 106, 0, 0.18), transparent 55%), radial-gradient(ellipse 45% 35% at 15% 85%, rgba(21, 50, 74, 0.9), transparent 50%), linear-gradient(180deg, #071421 0%, #0A1A2A 100%)',
      },
    },
  },
  plugins: [],
};
