const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'serif'],
        titles: ['Chillax', 'serif'],
      },
      dropShadow: {
        glow: [
          '-1px -1px 2px rgba(255, 215, 77, 0.5)',
          '1px 1px 2px rgba(124, 127, 255, 0.5)',
        ],
      },
      textShadow: {
        'text-glow': 'rgba(255, 215, 77, 0.6) -1px -1px 6px, rgba(124, 127, 255, 0.6) 1px 1px 6px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      backgroundImage: {
        spotlight: 'conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(91,145,182,.3) 49%, rgba(124,145,182,.5) 50%, rgba(124,145,182,.3) 51%, transparent 55%)',
      },
      maskImage: {
        spotlight: 'radial-gradient(farthest-side at 50% 0, red 50%, transparent 90%)',
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'spotlight-opacity:': {
          '0%': { opacity: 0.6 },
          '50%': { opacity: 0.5 },
          '95%': { opacity: 0.6 },
        },
        'spotlight-scale': {
          '0%': {
            transform: 'translateX(-50%) rotate(var(--rotate, 0deg)) scale(var(--scale, 1))',
          },
          '50%': {
            transform: 'translateX(-50%) rotate(calc(var(--rotate, 0deg) * 1.2)) scale(calc(var(--scale, 1) * 1.1))',
          },
          '100%': {
            transform: 'translateX(-50%) rotate(var(--rotate, 0deg)) scale(var(--scale, 1))',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
        'marquee': 'marquee 25s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'spotlight': 'spotlight-opacity calc(var(--duration, 5s)*1.2) linear infinite var(--delay, 0s) alternate, spotlight-scale calc(var(--duration, 5s)*1.7) linear infinite var(--delay, 0s) both',
      },
    },
  },
  plugins: [animate, function ({ addUtilities }) {
    addUtilities({
      '.text-glow': {
        textShadow: 'rgba(255, 215, 77, 0.6) -1px -1px 6px, rgba(124, 127, 255, 0.6) 1px 1px 6px',
      },
    })
  }],
}
