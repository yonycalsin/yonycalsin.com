interface BookItemProps {
  name: string
  imageSrc: string
  author: string
  rating: number
}

export function BookItem(props: BookItemProps) {
  const { name, imageSrc, author, rating } = props

  return (
    <div>
      <div className="mb-1">
        <img src={imageSrc} alt={name} className="w-full rounded-md" />
      </div>
      <div>
        <h5 className="mb-1">{name}</h5>
        <p className="mb-1 text-gray-400">{author}</p>
        <span className="text-sm">(Reviews {rating})</span>
      </div>
    </div>
  )
}
