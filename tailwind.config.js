const spacingSize = 8

const getSpacing = (count = 50) => Array.from({ length: count + 1 }).map((_, index) => `${index * spacingSize}px`)

const spacing = Object.assign({}, getSpacing(25))

/**
 * @type import("tailwindcss/tailwind-config").TailwindConfig
 */
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/*.tsx'],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: 'class',
  theme: {
    colors: {
      black: '#000000',
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: {
        50: '#D7FCF5',
        100: '#97F7E2',
        200: '#0EF2CE',
        300: '#00E8B8',
        400: '#00DCA8',
        500: '#00D198',
        DEFAULT: '#00C189',
        700: '#00AF77',
        800: '#009E68',
        900: '#007F48',
      },
      secondary: {
        50: '#FEF4E3',
        100: '#FDE2B9',
        200: '#FDCF8D',
        300: '#FCBB62',
        400: '#FBAD46',
        500: '#FAA036',
        DEFAULT: '#F59433',
        700: '#EE852F',
        800: '#E7772C',
        900: '#DC6128',
      },
      gray: {
        50: '#F3F9FF',
        100: '#ECF1F7',
        200: '#E2E7ED',
        300: '#D1D7DD',
        400: '#ADB3B8',
        500: '#8D9298',
        DEFAULT: '#656A70',
        700: '#52575C',
        800: '#34393D',
        900: '#14191D',
      },
      error: {
        50: '#FFE9EF',
        100: '#FFC9D5',
        200: '#F8919D',
        300: '#F26276',
        400: '#FF2D54',
        500: '#FF0038',
        DEFAULT: '#F70038',
        700: '#E50031',
        800: '#D80029',
        900: '#C9001D',
      },
      success: {
        50: '#E8F5E9',
        100: '#C8E6C9',
        200: '#A5D6A7',
        300: '#81C784',
        400: '#66BB6B',
        500: '#4CAF51',
        DEFAULT: '#43A048',
        700: '#388E3D',
        800: '#2E7D33',
        900: '#1B5E21',
      },
      warning: {
        50: '#FFFEE7',
        100: '#FDFBC2',
        200: '#FBF898',
        300: '#F9F46B',
        400: '#F6EF45',
        500: '#FFF627',
        DEFAULT: '#FFE21D',
        700: '#FFC90C',
        800: '#FFB000',
        900: '#FF8500',
      },
    },
    spacing: {
      ...spacing,
      0.5: '4px',
      1.5: '12px',
      2.5: '20px',
      3.5: '28px',
    },
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
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
              code: { color: theme('colors.primary.400') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            thead: {
              borderBottomColor: theme('colors.gray.200'),
            },
            code: { color: theme('colors.secondary.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              code: { color: theme('colors.primary.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      rotate: ['dark'],
      filter: ['dark'],
    },
    typography: ['dark'],
  },
  corePlugins: {
    float: false,
  },
  plugins: [require('@tailwindcss/typography')],
}
