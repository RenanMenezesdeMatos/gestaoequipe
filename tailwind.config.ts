import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'serif'],
        robotoSlab: ['"Roboto Slab"', 'serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purple-primary': '#660099',
        'purple-secondary': '#461E5F',
        'pink-primary': '#EB367D',
        'pink-secondary': '#CD1E5A',
        'green-primary': '#99CC33',
        'green-secondary': '#32A04B',
        'orange-primary': '#FF9900',
        'orange-secondary': '#FA6423',
        'text-primary': '#1f2937',
        'text-secondary': '#616161',
        'backgroundcolor': '#f5f5f5',
        'backgroundgray': '#f1f8fb'
      },
    },
  },
  plugins: [],
}
export default config
