import type { ComponentMeta } from '@storybook/react'

import motivationQuotes from '~/assets/data/motivation-quotes.json'

import { QuoteList, QuoteListProps } from './quote-list'

export default {
  title: 'Quote/List',
  component: QuoteList,
} as ComponentMeta<typeof QuoteList>

export const Default = (args: QuoteListProps) => {
  return <QuoteList {...args} />
}

Default.args = {
  quotes: motivationQuotes,
} as QuoteListProps
