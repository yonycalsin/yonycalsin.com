import * as React from 'react'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import { BsLink } from 'react-icons/bs'
import { FaNpm } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

import type { WorkItemProps } from 'typings/components'
import { Anchor } from 'components/anchor'
import { Badge } from 'components/badge'
import { Heading } from 'components/heading'
import { Icon } from 'components/icon'
import { normalizeDisplayUrl } from 'utils'
import { DATE_FORMATS } from 'utils/constants'
import { getWorkItemColors, WorkItemIcon } from './components'

function WorkItem(props: WorkItemProps) {
  const {
    tags = [],
    title,
    type,
    slug,
    description,
    webHref,
    startedAt = new Date(),
    repositoryHref,
    packageHref,
  } = props

  const colors = React.useMemo(() => {
    return getWorkItemColors(type)
  }, [type])

  return (
    <li id={slug} role="listitem" aria-label="Project Item">
      <div
        className={clsx(
          'shadow-lg absolute h-9 lg:h-12 w-9 lg:w-12 flex items-center justify-center rounded-full p-3',
          colors.backgroundColor,
        )}
      >
        <div className="absolute whitespace-nowrap hidden lg:block right-20">
          <p className="italic">{dayjs(startedAt).format(DATE_FORMATS.HUMAN_DATE)}</p>
        </div>
        <WorkItemIcon projectType={type} />
      </div>
      <div className="space-y-4 ml-14 lg:ml-20">
        <a href={webHref ?? repositoryHref ?? packageHref ?? '#'} target="__blank" className="block">
          <Heading size="h4">{title}</Heading>
        </a>
        <p>{description}</p>
        <div>
          <ul className="space-y-0 lg:space-y-1">
            {webHref && (
              <li>
                <Anchor href={webHref} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <Icon className="text-secondary-900">
                    <BsLink />
                  </Icon>
                  Visit {normalizeDisplayUrl(webHref)}
                </Anchor>
              </li>
            )}
            {repositoryHref && (
              <li>
                <Anchor href={repositoryHref} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <Icon className="text-gray-900">
                    <FiGithub />
                  </Icon>
                  View source code
                </Anchor>
              </li>
            )}
            {packageHref && (
              <li>
                <Anchor href={packageHref} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <Icon className="text-error-900">
                    <FaNpm />
                  </Icon>
                  View package
                </Anchor>
              </li>
            )}
          </ul>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map(item => (
            <Badge key={item} palette="primary">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </li>
  )
}

export default WorkItem
