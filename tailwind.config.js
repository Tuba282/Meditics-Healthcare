/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
//   theme: {
//     extend: {
//       keyframes: {
//         'fade-in-up': {
//           '0%': { opacity: '0', transform: 'translateY(40px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         'fade-in-left': {
//           '0%': { opacity: '0', transform: 'translateX(-40px)' },
//           '100%': { opacity: '1', transform: 'translateX(0)' },
//         },
//         'smooth-ping': {
//           '0%': { transform: 'scale(1)', opacity: '1' },
//           '70%': { transform: 'scale(1.15)', opacity: '0.5' },
//           '100%': { transform: 'scale(1.25)', opacity: '0' },
//         },
//       },
//       animation: {
//         'fade-in-up': 'fade-in-up 1s ease-out',
//         'fade-in-left': 'fade-in-left 1s ease-out',
//         'smooth-ping': 'smooth-ping 1.5s cubic-bezier(0.4,0,0.2,1) infinite',
//       },
//     },
//   },
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'smooth-ping': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '70%': { transform: 'scale(1.15)', opacity: '0.5' },
          '100%': { transform: 'scale(1.25)', opacity: '0' },
        },
        'scale-infinite': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
        'smooth-ping': 'smooth-ping 1.5s cubic-bezier(0.4,0,0.2,1) infinite',
        'scale-infinite': 'scale-infinite 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
