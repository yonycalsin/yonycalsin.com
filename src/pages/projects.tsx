import * as React from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { sample } from 'lodash'

import { Tag } from '~/components'
import { Meta } from '~/components/meta'
import { Clock } from '~/icons/clock'
import { HomeLayout } from '~/layouts'
import { dateFormat, socialLinks } from '~/utils/constants'
import type { GetStaticPropsResult } from 'next'
import { getWorkProjects, WorkProject } from '~/lib/airtable-api'

const Item = ({ tags = [], title, description, demoHref, startedAt = new Date() }: any) => (
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

interface ProjectsPageProps {
  workProjects: WorkProject[]
}

function ProjectsPage(props: ProjectsPageProps) {
  const { workProjects = [] } = props

  return (
    <HomeLayout>
      <Meta title="Proyectos" notRobots />

      <h1>Proyectos</h1>

      <p>
        Aqui algunos de mis proyectos destacados. Véalos todos{' '}
        <a href={socialLinks.GITHUB} target="blank">
          en mi GitHub
        </a>
        .
      </p>

      <div className="timeline relative space-y-5">
        {workProjects.map(work => (
          <Item
            title={work.name}
            demoHref={work.demoUrl}
            description={work.description}
            tags={work.technologies}
            startedAt={work.startedAt}
          />
        ))}
      </div>
    </HomeLayout>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    workProjects: WorkProject[]
  }>
> {
  const workProjects = await getWorkProjects()

  return {
    props: {
      workProjects: workProjects,
    },
  }
}

export default ProjectsPage
