const spacingSize = 8

const getSpacing = (count = 50) =>
   Array.from({ length: count + 1 }).map(
      (_, index) => `${index * spacingSize}px`,
   )

const spacing = Object.assign({}, getSpacing(25))

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
      spacing,
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
