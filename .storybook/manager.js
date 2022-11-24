// @ts-expect-error ts(2307)
// eslint-disable-next-line import/no-unresolved
import { addons } from '@storybook/addons'

import theme from './theme'

addons.setConfig({
  theme,
})
