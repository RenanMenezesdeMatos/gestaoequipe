import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/app/**/*.{ts,tsx,js,jsx,mdx}',
		'./src/components/**/*.{ts,tsx,js,jsx,mdx}',
		'./src/pages/**/*.{ts,tsx,js,jsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: [
					'Roboto',
					'serif'
				],
				robotoSlab: [
					'Roboto Slab"',
					'serif'
				]
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {

				'purple-primary-text': '#660099',
				'purple-secondary': '#461E5F',
				'pink-primary': '#EB367D',
				'pink-secondary': '#CD1E5A',
				'green-primary': '#99CC33',
				'green-secondary': '#32A04B',
				'orange-primary': '#FF9900',
				'orange-secondary': '#FA6423',
				'text-primary': '#1f2937',
				'text-secondary': '#616161',
				backgroundcolor: '#f5f5f5',
				backgroundgray: '#f1f8fb',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',

				purpleprimarytext: "hsl(var(--purple-primary-text))",
				purpleprimarybackground: "hsl(var(--purple-primary-background))",

				pinkprimarytext: "hsl(var(--pink-primary-text))",
				pinkprimarybackground: "hsl(var(--pink-primary-background))",

				greenprimarytext: "hsl(var(--green-primary-text))",
				greenprimarybackground: "hsl(var(--green-primary-background))",


				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
export default config
