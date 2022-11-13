import * as React from 'react'
import { AiFillStar } from 'react-icons/ai'

import type { BookItemProps } from 'typings/screens'
import { Heading } from 'components'

function BookItem(props: BookItemProps) {
  const { name, imageSrc, author, rating } = props

  return (
    <div className="space-y-3 p-3 bg-white rounded-lg shadow-card" role="listitem">
      <div>
        <img src={imageSrc} alt={name} className="w-full rounded-md" />
      </div>
      <Heading size="h5">{name}</Heading>
      <p className="text-sm line-clamp-1">{author}</p>
      <div className="flex flex-row items-center space-x-2">
        <AiFillStar className="text-primary-600" />
        <span>Rating {rating}</span>
      </div>
    </div>
  )
}

export default BookItem
