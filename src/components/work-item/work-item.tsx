import * as React from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { sample } from 'lodash'

import { Clock } from '~/icons/clock'
import { dateFormat } from '~/utils/constants'
import { Tag } from '../tag'

export interface WorkItemProps {
  title: string
  description: string
  demoHref?: string
  tags?: string[]
  startedAt: string
}

export function WorkItem(props: WorkItemProps) {
  const { tags = [], title, description, demoHref, startedAt = new Date() } = props

  return (
    <div>
      <div className="bg-white dark:bg-gray-700 shadow-md absolute h-6 w-6 p-1 flex items-center justify-center rounded-full dark:text-white">
        <div className="absolute right-9 whitespace-nowrap hidden lg:block">
          <span className="italic">{dayjs(startedAt).format(dateFormat.PROJECT_DATE)}</span>
        </div>
        <Clock className="w-full h-full" />
      </div>
      <div className="ml-9">
        <a href={demoHref} target="__blank">
          <h4 className="font-bold m-0">{title}</h4>
        </a>
        <p>{description}</p>
        <div className="flex flex-wrap gap-1">
          {tags.map((item: any) => (
            <Tag
              key={item}
              className={clsx(
                sample(['bg-primary', 'bg-secondary', 'bg-success', 'bg-error']),
                'opacity-60 hover:opacity-90',
              )}
            >
              {item}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  )
}
