import { extendTheme } from '@chakra-ui/react'

const mainTheme = extendTheme({
  config: {
    cssVarPrefix: 'yony',
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
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
    },
  },
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    secondary: {
      50: '#e6f1ef',
      100: '#c1ddd8',
      200: '#9dc8c0',
      300: '#7fb2a7',
      400: '#6fa296',
      500: '#679186',
      600: '#60847a',
      700: '#58746b',
      800: '#51645e',
      900: '#454646',
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
