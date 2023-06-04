import * as React from 'react'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import { BsLink } from 'react-icons/bs'
import { FaNpm } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

import type { WorkItemProps } from 'typings/components'
import { Heading } from 'components/heading'
import { Icon } from 'components/icon'
import { Badge } from 'components/ui/badge'
import { Button } from 'components/ui/button'
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
    <li id={slug} aria-label="Project Item">
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
        <div className="flex flex-col items-start">
          {webHref ? (
            <Button variant="link" asChild={true}>
              <a href={webHref} target="_blank" rel="noreferrer">
                <Icon className="mr-2">
                  <BsLink />
                </Icon>
                Visit {normalizeDisplayUrl(webHref)}
              </a>
            </Button>
          ) : null}
          {repositoryHref ? (
            <Button variant="link" asChild={true}>
              <a href={repositoryHref} target="_blank" rel="noreferrer">
                <Icon className="mr-2">
                  <FiGithub />
                </Icon>
                View source code
              </a>
            </Button>
          ) : null}
          {packageHref ? (
            <Button variant="link" asChild={true}>
              <a href={packageHref} target="_blank" rel="noreferrer">
                <Icon className="mr-2">
                  <FaNpm />
                </Icon>
                View package
              </a>
            </Button>
          ) : null}
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map(item => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
    </li>
  )
}

export default WorkItem
