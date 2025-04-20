/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados para la pastelería El Girasol
        primary: "#C7ABDB",      // Color principal (morado/lila)
        secondary: "#11bc9d",    // Color secundario (dorado/amarillo)
        accent: "#FF6B6B",       // Color de acento (rosa/rojo suave)
        girasol: {
          green: "#4CAF50",      // Verde para el tallo del girasol
          yellow: "#FFEB3B",     // Amarillo para los pétalos
          brown: "#795548",      // Marrón para el centro
          cream: "#FFF9E6",      // Crema para fondos
          pink: "#F48FB1",       // Rosa para detalles
          purple: "#9C27B0",     // Púrpura para acentos
        }
      },
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
        'poppins': ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}