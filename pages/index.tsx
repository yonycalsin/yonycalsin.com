import * as React from 'react'
import type { GetStaticPropsResult } from 'next'
import Link from 'next/link'
import { useFlag } from 'toggled'

import motivationQuotes from '~/assets/data/motivation-quotes.json'
import openSourceProjects from '~/assets/data/open-source-projects.json'
import github from '~/assets/images/github.svg'
import linkedin from '~/assets/images/linkedin.svg'
import { BlogPosts } from '~/components/blog-post-list/blog-posts'
import { Button } from '~/components/button'
import { Meta } from '~/components/meta'
import { QuoteList } from '~/components/quotes/quote-list'
import { Section } from '~/components/section/section'
import { SectionHeader } from '~/components/section/section-header'
import { HomeLayout } from '~/layouts'
import { socialLinks } from '~/utils/constants'
import Features from '~/utils/features-flags'

// @ts-ignore
import { allBlogs as allBlogsContent } from '.contentlayer/data'
// @ts-ignore
import type { Blog } from '.contentlayer/types'

const allBlogs = (allBlogsContent ?? []) as Blog[]

interface HomePageProps {
  latestBlogs: Blog[]
}

function HomePage(props: HomePageProps) {
  const { latestBlogs } = props

  const hasBlog = useFlag(Features.BLOG)

  const hasOssProjects = useFlag(Features.OSS_PROJECTS)

  return (
    <HomeLayout>
      <Meta />
      <article className="article">
        <header>
          <div className="text-center">
            <h1 className="dark:text-white hidden md:block">Hola, soy Yony.</h1>
          </div>
        </header>
        <div className="text-center break-words">
          <p className="lead dark:text-gray-100">
            Soy un desarrollador de software <b>autodidacta</b> que actualmente trabaja en Riqra. Este es mi sitio web
            personal - donde encontrarás todas las cosas que he aprendido y creado a lo largo de los años
          </p>
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href="/me">
            <Button variant="light">Más sobre mí</Button>
          </Link>
        </div>
        {hasBlog && (
          <BlogPosts
            title="Últimos artículos"
            actionHref="/blog"
            actionLabel="Ver Todo"
            posts={latestBlogs}
            className="mt-4"
          />
        )}
        {hasOssProjects && (
          <Section>
            <SectionHeader
              title="Proyectos de código abierto"
              actionLabel="Ver todo"
              actionHref={socialLinks.GITHUB}
              actionHrefExternal
            />
            <div className="mt-3 space-y-2">
              {openSourceProjects.map(project => (
                <div key={project.name}>
                  <div className="flex justify-between mb-1">
                    <p className="md:text-h4 mb-0 text-gray-500 font-bold">{project.name}</p>
                    <a
                      className="md:text-base mb-0 text-gray-500 "
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="hidden md:block">Codigo Fuente</span>
                      <span className="block md:hidden">Ver</span>
                    </a>
                  </div>
                  <p className="mb-0 text-base">{project.summary}</p>
                </div>
              ))}
            </div>
          </Section>
        )}
        <Section>
          <SectionHeader title="Citas" />
          <QuoteList className="mt-3" quotes={motivationQuotes} />
        </Section>
      </article>
    </HomeLayout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomePageProps>> {
  const latestBlogs = allBlogs
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
    .slice(0, 5)

  return {
    props: {
      latestBlogs,
    },
  }
}

export default HomePage
