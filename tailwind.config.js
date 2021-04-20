module.exports = {
   mode: 'jit',
   purge: ['./src/**/*.{js,jsx,ts,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      container: false,
      extend: {},
   },
   variants: {
      extend: {},
   },
   plugins: [require('@tailwindcss/typography')],
}
