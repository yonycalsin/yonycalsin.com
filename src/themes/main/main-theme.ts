import { extendTheme, ThemeComponentProps } from '@chakra-ui/react'
// @ts-expect-error ts(2307)
import { mode } from '@chakra-ui/theme-tools'

const mainTheme = extendTheme({
  config: {
    cssVarPrefix: 'yony',
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  fonts: {
    heading: `"Sofia Pro", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `"Sofia Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  semanticTokens: {
    colors: {
      'mdx-blockquote-bg': {
        _light: 'primary.50',
        _dark: 'gray.900',
      },
      'mdx-blockquote-border-color': {
        _light: 'primary.100',
        _dark: 'primary.600',
      },
      'mdx-blockquote-border-left-color': {
        _light: 'primary.600',
        _dark: 'primary.500',
      },
      'chakra-body-text': {
        _light: 'gray.800',
        _dark: 'whiteAlpha.800',
      },
      'chakra-body-bg': {
        _light: 'white',
        _dark: 'gray.900',
      },
      'chakra-border-color': {
        _light: 'gray.200',
        _dark: 'whiteAlpha.300',
      },
      'chakra-placeholder-color': {
        _light: 'gray.500',
        _dark: 'whiteAlpha.400',
      },
    },
  },
  styles: {
    global: (props: ThemeComponentProps) => ({
      'html, body': {
        fontSize: {
          base: 'md',
          lg: 'lg',
        },
      },
      '::selection': {
        backgroundColor: mode('secondary.100', 'secondary.800')(props),
      },
    }),
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  colors: {
    primary: {
      50: '#ffeef1',
      100: '#ffd5d9',
      200: '#f8a8a5',
      300: '#f28882',
      400: '#ff6e61',
      500: '#ff6247',
      600: '#f75b48',
      700: '#e45141',
      800: '#d74b3b',
      900: '#c8412f',
    },
    secondary: {
      50: '#ddfcff',
      100: '#a9f7fe',
      200: '#61f2ff',
      300: '#00eafe',
      400: '#00e3fa',
      500: '#00dcf9',
      600: '#00cbe4',
      700: '#00b4c8',
      800: '#00a0ae',
      900: '#007b7f',
    },
    error: {
      50: '#FFE9EF',
      100: '#FFC9D5',
      200: '#F8919D',
      300: '#F26276',
      400: '#FF2D54',
      500: '#FF0038',
      600: '#F70038',
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
      600: '#43A048',
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
      600: '#FFE21D',
      700: '#FFC90C',
      800: '#FFB000',
      900: '#FF8500',
    },
    gray: {
      50: '#eaecee',
      100: '#cad1d6',
      200: '#a7b2ba',
      300: '#8494a0',
      400: '#6b7e8c',
      500: '#526979',
      600: '#465b69',
      700: '#384854',
      800: '#2a363f',
      900: '#192229',
    },
  },
  mdx: {
    h1: {
      mt: '6',
      mb: '6',
      lineHeight: 1.2,
      fontWeight: 'bold',
      fontSize: '1.875rem',
      letterSpacing: '-.025em',
    },
    h2: {
      mt: '6',
      mb: '6',
      lineHeight: 1.3,
      fontWeight: 'semibold',
      fontSize: '1.5rem',
      letterSpacing: '-.025em',
      '& + h3': {
        mt: '1.5rem',
      },
    },
    h3: {
      mt: '6',
      mb: '6',
      lineHeight: 1.25,
      fontWeight: 'semibold',
      fontSize: '1.25rem',
      letterSpacing: '-.025em',
    },
    h4: {
      mt: '6',
      mb: '6',
      lineHeight: 1.375,
      fontWeight: 'semibold',
      fontSize: '1.125rem',
    },
    a: {
      color: 'primary.500',
      fontWeight: 'semibold',
      transition: 'color 0.15s',
      transitionTimingFunction: 'ease-out',
      _hover: {
        color: 'primary.600',
      },
    },
    p: {
      mt: '1.25rem',
      lineHeight: 1.7,
      'blockquote &': {
        mt: 0,
      },
    },
    hr: {
      my: '4rem',
    },
    blockquote: {
      bg: 'mdx-blockquote-bg',
      borderWidth: '1px',
      borderColor: 'mdx-blockquote-border-color',
      borderLeft: '5px solid',
      borderLeftColor: 'mdx-blockquote-border-left-color',
      rounded: 'lg',
      px: '1.25rem',
      py: '1rem',
      my: '1.5rem',
    },
    ul: {
      mt: '0.5rem',
      ml: '1.25rem',
      'blockquote &': { mt: 0 },
      '& > * + *': {
        mt: '0.25rem',
      },
    },
    code: {
      rounded: 'sm',
      px: '1',
      fontSize: '0.875em',
      py: '2px',
      lineHeight: 'normal',
    },
  },
})

export default mainTheme
