/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // gray-700
        input: "var(--color-input)", // gray-800
        ring: "var(--color-ring)", // electric teal
        background: "var(--color-background)", // deep space
        foreground: "var(--color-foreground)", // white
        primary: {
          DEFAULT: "var(--color-primary)", // electric teal
          foreground: "var(--color-primary-foreground)", // deep space
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // violet
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // coral red
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-700
          foreground: "var(--color-muted-foreground)", // gray-400
        },
        accent: {
          DEFAULT: "var(--color-accent)", // warm amber
          foreground: "var(--color-accent-foreground)", // deep space
        },
        popover: {
          DEFAULT: "var(--color-popover)", // gray-800
          foreground: "var(--color-popover-foreground)", // white
        },
        card: {
          DEFAULT: "var(--color-card)", // gray-800
          foreground: "var(--color-card-foreground)", // white
        },
        success: {
          DEFAULT: "var(--color-success)", // electric teal
          foreground: "var(--color-success-foreground)", // deep space
        },
        warning: {
          DEFAULT: "var(--color-warning)", // warm amber
          foreground: "var(--color-warning-foreground)", // deep space
        },
        error: {
          DEFAULT: "var(--color-error)", // coral red
          foreground: "var(--color-error-foreground)", // white
        },
        surface: {
          DEFAULT: "var(--color-surface)", // gray-800
          foreground: "var(--color-surface-foreground)", // white
        },
        text: {
          primary: "var(--color-text-primary)", // white
          secondary: "var(--color-text-secondary)", // gray-400
          tertiary: "var(--color-text-tertiary)", // gray-500
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 72px
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 60px
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 48px
        'display-sm': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 36px
        'heading-xl': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 32px
        'heading-lg': ['1.75rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }], // 28px
        'heading-md': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }], // 24px
        'heading-sm': ['1.25rem', { lineHeight: '1.5' }], // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'body-md': ['1rem', { lineHeight: '1.6' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1.4' }], // 12px
      },
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '26': '6.5rem', // 104px
        '30': '7.5rem', // 120px
        '34': '8.5rem', // 136px
        '38': '9.5rem', // 152px
        '42': '10.5rem', // 168px
        '46': '11.5rem', // 184px
        '50': '12.5rem', // 200px
      },
      animation: {
        'constellation-pulse': 'constellation-pulse 3s ease-in-out infinite',
        'orbital-rotation': 'orbital-rotation 20s linear infinite',
        'electric-flow': 'electric-flow 3s ease-in-out infinite',
        'magnetic-hover': 'magnetic-hover 0.3s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'constellation': '0 0 20px rgba(0, 230, 195, 0.3)',
        'orbital': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'magnetic': '0 8px 32px rgba(0, 230, 195, 0.4)',
        'glassmorphism': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'premium': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'constellation': '10px',
      },
      backgroundImage: {
        'electric-gradient': 'linear-gradient(90deg, #00E6C3, #8B6EF6)',
        'constellation-pattern': 'radial-gradient(circle at 25% 25%, rgba(0, 230, 195, 0.1) 0%, transparent 50%)',
        'orbital-glow': 'radial-gradient(circle, rgba(0, 230, 195, 0.1) 0%, transparent 70%)',
      },
      zIndex: {
        'constellation': '100',
        'orbital': '200',
        'magnetic': '300',
      },
    },
  },
  plugins: [],
}