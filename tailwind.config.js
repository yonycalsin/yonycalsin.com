module.exports = {
   // mode: 'jit',
   purge: {
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
      options: {
         keyframes: true,
         fontFace: true,
      },
   },
   darkMode: false, // or 'media' or 'class'
   theme: {
      container: false,
      extend: {},
   },
   variants: {
      extend: {},
   },
   plugins: [require('@tailwindcss/typography')],
   corePlugins: {
      float: false,
   },
}
