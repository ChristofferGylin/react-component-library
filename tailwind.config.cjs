/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'progress': 'progress 10s linear infinite',
        'progress25': 'progress25 10s linear infinite',
        'progress50': 'progress50 10s linear infinite',
        'progress75': 'progress75 10s linear infinite',
        'alert': 'alert 4s ease-in-out infinite'
      },

      keyframes: {

        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },

        progress25: {
          '0%': { width: '25%' },
          '74.999%': { width: '100%' },
          '75%': { width: '0%' },
          '100%': { width: '25%' },
        },

        progress50: {
          '0%': { width: '50%' },
          '49.999%': { width: '100%' },
          '50%': { width: '0%' },
          '100%': { width: '50%' },
        },

        progress75: {
          '0%': { width: '75%' },
          '24.999%': { width: '100%' },
          '25%': { width: '0%' },
          '100%': { width: '75%' },
        },

        alert: {

          '0%': {
            transform: 'translateX(0)',
            background: '#a855f7'
          },

          '15%': { transform: 'translateX(150%)' },

          '18%': { background: '#a855f7' },
          '19%': { background: '#0ea5e9' },

          '20%': { transform: 'translateX(150%)' },

          '35%': { transform: "translateX(0)" },
          '50%': { background: '#0ea5e9' },
          '50%': { transform: "translateX(0)" },


          '65%': { transform: 'translateX(150%)' },

          '68%': { background: '#0ea5e9' },
          '69%': { background: '#a855f7' },

          '70%': { transform: 'translateX(150%)' },

          '85%': { transform: "translateX(0)" },
          '100%': { background: '#a855f7' },




        }
      },
      screens: {
        sm: '695px',
        md: '896px',
        lg: '1150px',
        "2xl": '1556px'
      }
    },
  },
  plugins: [],
}
