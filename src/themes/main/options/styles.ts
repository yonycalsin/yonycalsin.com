import type { ThemeComponentProps } from '@chakra-ui/react'
// @ts-expect-error ts(2307)
import { mode } from '@chakra-ui/theme-tools'

const styles = {
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
}

export default styles
