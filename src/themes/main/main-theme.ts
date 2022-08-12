import { extendTheme } from '@chakra-ui/react'

import colors from './options/colors'
import config from './options/config'
import fontSizes from './options/font-sizes'
import fonts from './options/fonts'
import mdx from './options/mdx'
import semanticTokens from './options/semantic-tokens'
import styles from './options/styles'

const mainTheme = extendTheme({
  config,
  fonts,
  semanticTokens,
  styles,
  fontSizes,
  colors,
  mdx,
})

export default mainTheme
