import * as React from 'react'
import { dehydrate, DehydratedState, QueryClient } from 'react-query'
import ms from 'ms'
import type { GetStaticPropsResult } from 'next'
import Link from 'next/link'
import { useFlag } from 'toggled'

import openSourceProjects from '~/assets/data/open-source-projects.json'
import { createQueryFn } from '~/clients/query-client'
import { Anchor } from '~/components/anchor/anchor'
import { BlogPosts } from '~/components/blog-post-list/blog-posts'
import { Button } from '~/components/button'
import { Meta } from '~/components/meta'
import { QuoteList } from '~/components/quotes/quote-list'
import { Section } from '~/components/section/section'
import { SectionHeader } from '~/components/section/section-header'
import { Typography } from '~/components/typography/typography'
import quotes from '~/data/config/es/quotes.json'
import { MainLayout } from '~/layouts'
import { allBlogs, Blog } from '~/lib/contentlayer-data/blog'
import type { IAchievementQueryWithMeta } from '~/module-types/api-rest/achievements'
import { FeaturedAchievements } from '~/screens/home/components'
import { queryKeys, socialLinks } from '~/utils/constants'
import Features from '~/utils/features-flags'

interface HomePageProps {
  latestBlogs: Blog[]
  dehydratedState: DehydratedState
}

function HomePage(props: HomePageProps) {
  const { latestBlogs } = props

  const hasBlog = useFlag(Features.BLOG)

  const hasOssProjects = useFlag(Features.OSS_PROJECTS)

  const hasAchievementsFF = useFlag(Features.ACHIEVEMENTS)

  return (
    <MainLayout>
      <Meta />
      <div className="break-words pt-4">
        <Typography variant="h2" gutterBottom fontWeight="extrabold">
          Hola, soy Yony.
        </Typography>
        <Typography gutterBottom>
          Soy un desarrollador de software{' '}
          <Anchor component="span" variant="decorated">
            autodidacta
          </Anchor>
          . Este es mi sitio web personal - donde encontrarás todas las cosas que he aprendido y creado a lo largo de
          los años
        </Typography>
        <Link href="/me" passHref>
          <Button variant="light">Más sobre mí</Button>
        </Link>
      </div>
      {hasAchievementsFF && <FeaturedAchievements />}
      {hasBlog && (
        <Section>
          <SectionHeader
            title="Proyectos de código abierto"
            actionLabel="Ver todo"
            actionHref={socialLinks.GITHUB}
            actionHrefExternal
          />
          <BlogPosts
            title="Últimos artículos"
            actionHref="/blog"
            actionLabel="Ver Todo"
            posts={latestBlogs}
            className="mt-4"
          />
        </Section>
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
                  <p className="md:text-lg mb-0 text-gray-500 font-bold">{project.name}</p>
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
        <SectionHeader title="Quotes" />
        <QuoteList className="my-3" quotes={quotes} />
      </Section>
    </MainLayout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomePageProps>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: createQueryFn(),
      },
    },
  })

  const latestBlogs = allBlogs
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
    .slice(0, 5)

  await queryClient.prefetchQuery<IAchievementQueryWithMeta>(queryKeys.FEATURED_ACHIEVEMENTS, {
    staleTime: Infinity,
  })

  return {
    props: {
      latestBlogs,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: ms('30m'),
  }
}

export default HomePage
