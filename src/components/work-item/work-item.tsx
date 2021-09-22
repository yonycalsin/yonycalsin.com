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
  webHref?: string
  repositoryHref?: string
  packageHref?: string
  tags?: string[]
  startedAt: string
}

export function WorkItem(props: WorkItemProps) {
  const { tags = [], title, description, webHref, startedAt = new Date(), repositoryHref, packageHref } = props

  return (
    <div className="border-r-8 border-transparent hover:border-gray-200 border-double">
      <div className="bg-white dark:bg-gray-700 shadow-md absolute h-6 w-6 p-1 flex items-center justify-center rounded-full dark:text-white">
        <div className="absolute right-9 whitespace-nowrap hidden lg:block">
          <span className="italic">{dayjs(startedAt).format(dateFormat.PROJECT_DATE)}</span>
        </div>
        <Clock className="w-full h-full" />
      </div>
      <div className="ml-9">
        <a href={webHref ?? repositoryHref ?? packageHref ?? '#'} target="__blank">
          <h4 className="font-bold m-0 inline">{title}</h4>
        </a>
        <p>{description}</p>
        <div className="mb-3 flex gap-2 dark:invert">
          {webHref && (
            <a href={webHref} target="_blank" className="w-3 h-3 hover:scale-110" title="Website">
              <img src="https://cdn-icons-png.flaticon.com/512/2301/2301129.png" alt="Website" />
            </a>
          )}
          {repositoryHref && (
            <a href={repositoryHref} target="_blank" className="w-3 h-3 hover:scale-110" title="Repository">
              <img src="https://cdn.svgporn.com/logos/github-icon.svg" alt="Repository" />
            </a>
          )}
          {packageHref && (
            <a href={packageHref} target="_blank" className="w-3 h-3 hover:scale-110" title="Package">
              <img src="https://cdn-icons-png.flaticon.com/512/726/726546.png" className="w-3 h-3" alt="Package" />
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          {tags.map((item: any) => (
            <Tag
              key={item}
              className={clsx(
                sample(['bg-primary', 'bg-secondary', 'bg-success', 'bg-error']),
                'opacity-60 hover:opacity-90 text-xs',
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
