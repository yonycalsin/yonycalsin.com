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
         fontSize: {
            xl: ['1.25rem', '1.99rem'],
            '2xl': ['1.5rem', '2.5rem'],
         },
      },
   },
   variants: {
      extend: {
         rotate: ['dark'],
         filter: ['dark'],
      },
   },
   corePlugins: {
      float: false,
   },
}
