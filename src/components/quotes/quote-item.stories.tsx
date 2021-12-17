import type { ComponentMeta } from '@storybook/react'

import { QuoteItem, QuoteItemProps } from './quote-item'

export default {
  title: 'Quote/Item',
  component: QuoteItem,
} as ComponentMeta<typeof QuoteItem>

export const Default = (args: QuoteItemProps) => {
  return <QuoteItem {...args} />
}

Default.args = {
  author: 'Yony Calsin',
  phrase:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi id exercitationem omnis vero totam architecto reprehenderit iure vel, ex, pariatur, repudiandae expedita recusandae mollitia quisquam nihil illum. Ex, ea?',
}
