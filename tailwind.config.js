/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'azul-confianca': '#1E40AF',
        'verde-sucesso': '#059669',
        'laranja-energia': '#EA580C',
        'cinza-escuro': '#374151',
        'cinza-medio': '#6B7280',
        'cinza-claro': '#F9FAFB',
        'azul-claro': '#DBEAFE',
        'verde-claro': '#D1FAE5',
        'amarelo-destaque': '#FCD34D',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}