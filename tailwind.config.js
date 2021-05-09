module.exports = {
   // mode: 'jit',
   purge: {
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
      options: {
         keyframes: true,
         fontFace: true,
      },
   },
   darkMode: 'class',
   theme: {
      container: false,
      extend: {
         rotate: {
            135: '135deg',
         },
      },
   },
   variants: {
      extend: {
         rotate: ['dark'],
      },
   },
   plugins: [require('@tailwindcss/typography')],
   corePlugins: {
      float: false,
   },
}
