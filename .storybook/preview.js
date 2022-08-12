import theme from './theme'

import '~/assets/styles/nprogress.css'
import '~/assets/styles/coding.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme,
  },
  backgrounds: {
    disable: true,
  },
  themes: {
    default: 'Light',
    target: 'html',
    list: [
      {
        name: 'Light',
        class: ['light'],
        color: '#ffffff',
      },
      {
        name: 'Dark',
        // The class dark will be added to the body tag
        class: ['dark'],
        color: '#000000',
      },
    ],
  },
}
