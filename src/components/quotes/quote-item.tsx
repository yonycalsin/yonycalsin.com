export interface QuoteItemProps {
  phrase: string
  author: string
}

export function QuoteItem(props: QuoteItemProps) {
  const { author, phrase } = props

  return (
    <blockquote>
      {phrase}
      <br />
      <b>— {author}</b>
    </blockquote>
  )
}
