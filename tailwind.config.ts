import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				terracotta: {
					DEFAULT: '#E2B4A2',
					dark: '#C9876D', 
					darker: '#B26C4D', 
					light: '#F3D5C9',
					vivid: '#FF8C69', // Added vibrant terracotta
				},
				sage: {
					DEFAULT: '#C2C5AA',
					dark: '#8A9171', 
					darker: '#6A7152', 
					light: '#DFE0D1',
					vivid: '#A0D468', // Added vibrant sage
				},
				cream: {
					DEFAULT: '#F5F2EA',
					dark: '#E8DCC8', 
					darker: '#D5C7A8', 
					light: '#FDFAF5',
				},
				walnut: {
					DEFAULT: '#5A4435', 
					light: '#7D614D',
					dark: '#3D2E24',
				},
				coral: {
					DEFAULT: '#FF8366', 
					light: '#FFA08C',
					dark: '#E06046',
					vivid: '#FF6B6B', // Added vibrant coral
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					blue: '#6ECFF6',
					purple: '#B19CD9',
					mint: '#86E3CE',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slow-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(3deg)' },
					'50%': { transform: 'rotate(0deg)' },
					'75%': { transform: 'rotate(-3deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slow-spin': 'slow-spin 10s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite'
			},
			dropShadow: {
				'soft': '0 10px 15px rgba(0, 0, 0, 0.05)',
				'glow': '0 0 10px rgba(226, 180, 162, 0.7)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'diagonal': 'linear-gradient(45deg, var(--tw-gradient-stops))',
				'texture-light': 'url("/textures/light-paper.png")',
				'texture-grain': 'url("/textures/grain.png")',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;