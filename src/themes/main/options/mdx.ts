const mdx = {
  h1: {
    mt: '6',
    mb: '6',
    lineHeight: 1.2,
    fontWeight: 'bold',
    fontSize: '1.875rem',
    fontFamily: 'heading',
  },
  h2: {
    mt: '6',
    mb: '6',
    lineHeight: 1.3,
    fontWeight: 'bold',
    fontSize: '1.5rem',
    fontFamily: 'heading',

    '& + h3': {
      mt: '1.5rem',
    },
  },
  h3: {
    mt: '6',
    mb: '6',
    lineHeight: 1.25,
    fontWeight: 'bold',
    fontSize: '1.25rem',
    fontFamily: 'heading',
  },
  h4: {
    mt: '6',
    mb: '6',
    lineHeight: 1.375,
    fontWeight: 'bold',
    fontSize: '1.125rem',
    fontFamily: 'heading',
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
}

export default mdx
