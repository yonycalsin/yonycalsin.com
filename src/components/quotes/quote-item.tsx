export interface QuoteItemProps {
  phrase: string
  author: string
}

export function QuoteItem(props: QuoteItemProps) {
  const { author, phrase } = props

  return (
    <blockquote className="border border-l-4 dark:bg-gray-900 p-2 rounded-lg dark:border-transparent border-l-primary-300 dark:border-l-primary mb-0">
      <p className="mb-1">{phrase}</p>
      <p className="mb-1">
        - <a>{author}</a>
      </p>
    </blockquote>
  )
}
