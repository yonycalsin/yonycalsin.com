module.exports = {
   mode: 'jit',
   purge: {
      content: ['./src/**/*.{js,jsx,ts,tsx}', './gatsby-ssr.js'],
      options: {
         keyframes: true,
         fontFace: true,
      },
   },
   darkMode: 'class',
   theme: {
      container: {
         center: true,
      },
      extend: {
         rotate: {
            135: '135deg',
         },
         backgroundColor: {
            inherit: 'inherit',
         },
      },
   },
   variants: {
      extend: {
         rotate: ['dark'],
      },
   },
   corePlugins: {
      float: false,
   },
}
