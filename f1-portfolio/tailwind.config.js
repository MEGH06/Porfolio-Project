/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ferrari: {
          red: '#dc143c',
          'dark-red': '#b71c1c',
          yellow: '#ffd700',
        },
        mclaren: {
          orange: '#ff8700',
          'dark-orange': '#e67600',
          silver: '#c0c0c0',
        },
        racing: {
          black: '#0a0a0a',
          'dark-gray': '#1a1a1a',
          'card-dark': '#2a2a2a',
          'speed-blue': '#00d4ff',
          'neon-green': '#39ff14',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'race': 'race 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'particle': 'particle 20s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-fast': 'pulse 1s infinite',
      },
      keyframes: {
        race: {
          '0%': { transform: 'translateX(-100px) translateY(0px)' },
          '50%': { transform: 'translateX(50vw) translateY(-10px)' },
          '100%': { transform: 'translateX(calc(100vw + 100px)) translateY(0px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(100vh) translateX(0px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10px) translateX(100px) rotate(360deg)', opacity: '0' },
        },
        glow: {
          'from': { filter: 'drop-shadow(0 0 10px #dc143c)' },
          'to': { filter: 'drop-shadow(0 0 20px #ff8700)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#dc143c' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) translateX(-10px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) translateX(100px) rotate(360deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        'racing-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        'ferrari-gradient': 'linear-gradient(45deg, #dc143c, #b71c1c)',
        'mclaren-gradient': 'linear-gradient(45deg, #ff8700, #e67600)',
        'track-lines': 'repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(255,255,255,0.1) 48px, rgba(255,255,255,0.1) 52px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}