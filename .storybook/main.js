/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const tsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const prettierConfig = require('../.prettierrc')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig,
        },
      },
    },
    'storybook-addon-themes',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new tsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ]

    return config
  },
}
