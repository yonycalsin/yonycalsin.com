import type { ComponentProps } from 'react'
import clsx from 'clsx'

import { QuoteItem } from './quote-item'

export interface QuoteListProps {
  quotes: ComponentProps<typeof QuoteItem>[]
  className?: string
}

export function QuoteList(props: QuoteListProps) {
  const { quotes, className } = props

  return (
    <div className={clsx('grid lg:grid-cols-2 gap-2', className)}>
      {quotes.map(quote => (
        <QuoteItem phrase={quote.phrase} author={quote.author} key={quote.phrase} />
      ))}
    </div>
  )
}
