import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './index'

export default {
  title: 'Core/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Hello World',
}

export const Disabled = Template.bind({})

Disabled.args = {
  children: 'Click Me',
  isDisabled: true,
}

export const FullWidth = Template.bind({})

FullWidth.args = {
  children: 'Click Me',
  isFullWidth: true,
}
