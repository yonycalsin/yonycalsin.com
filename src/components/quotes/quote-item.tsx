import { Anchor } from '../anchor/anchor'
import { Typography } from '../typography/typography'

export interface QuoteItemProps {
  phrase: string
  author: string
}

export function QuoteItem(props: QuoteItemProps) {
  const { author, phrase } = props

  return (
    <blockquote className="border border-l-4 dark:bg-gray-900 p-2 rounded-lg dark:border-transparent border-l-primary-300 dark:border-l-primary mb-0">
      <Typography className="italic mb-1 dark:text-gray-500">{phrase}</Typography>
      <Typography variant="h6" className="italic" fontWeight="light">
        - <Anchor>{author}</Anchor>
      </Typography>
    </blockquote>
  )
}
