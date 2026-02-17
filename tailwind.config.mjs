/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Paleta de Confianza (Azules) [cite: 708]
				primary: {
					DEFAULT: '#0045AA', // Azul Principal
					dark: '#003264',    // Azul Oscuro (Textos, Footer)
					light: '#42BCF4',   // Azul Claro
					soft: '#E8F4FA',    // Fondos suaves
				},
				// Paleta de Energía (Naranjas) [cite: 717]
				accent: {
					DEFAULT: '#E57200', // Naranja Principal (Botones, CTA)
					light: '#FF8C42',   // Hover estados
					soft: '#FFF3E0',    // Fondos destacados
				},
				// Neutros [cite: 726]
				neutral: {
					white: '#FFFFFF',
					light: '#F5F5F5',   // Gris Claro (Fondos alternos)
					dark: '#666666',    // Gris Oscuro (Texto cuerpo)
					black: '#1A1A1A',   // Títulos fuertes
				},
				// Semánticos (Estados) [cite: 734]
				status: {
					success: '#28A745',
					warning: '#FFC107',
					error: '#DC3545',
				}
			},
			fontFamily: {
				// Configuración tipográfica según Guía de Identidad
				sans: ['Inter', 'sans-serif'], // Texto cuerpo [cite: 743]
				display: ['Poppins', 'sans-serif'], // Títulos [cite: 759]
				mono: ['Roboto Mono', 'monospace'], // Datos y Precios [cite: 774]
			},
		},
	},
	plugins: [],
}