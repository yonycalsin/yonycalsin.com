import * as React from 'react'
import type { GetStaticPropsResult } from 'next'
import Link from 'next/link'
import { useFeature } from 'toggled'

import motivationQuotes from '~/assets/data/motivation-quotes.json'
import github from '~/assets/images/github.svg'
import linkedin from '~/assets/images/linkedin.svg'
import BlogPostList from '~/components/blog-post-list/blog-post-list'
import { Meta } from '~/components/meta'
import { QuoteList } from '~/components/quotes/quote-list'
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

  const hasBlog = useFeature(Features.BLOG)

  return (
    <HomeLayout isStandaloneBrand>
      <Meta />
      <article className="article">
        <header>
          <div className="text-center">
            <h1 className="dark:text-white hidden md:block">Hola, soy Yony.</h1>
            <p className="text-gray-500">
              <i>
                Full Stack React/Node Engineer en{' '}
                <a href="https://riqra.com/" target="_blank" rel="noopener noreferrer">
                  Riqra
                </a>
              </i>
            </p>
          </div>
        </header>
        <div className="text-center break-words">
          <p className="lead dark:text-gray-100">
            Soy desarrollador de software <b>autodidacta</b>. Me encanta crear proyectos de código abierto y compartir
            lo que aprendo. Este sitio web es mi patio digital, un compendio de las cosas que he aprendido y creado a lo
            largo de los años.
          </p>
          <div className="flex items-center justify-center space-x-1">
            <a
              href={socialLinks.GITHUB}
              className="p-1 rounded-sm bg-transparent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={github.src} alt="Github" className="h-2 filter dark:invert" />
            </a>
            <a
              href={socialLinks.LINKEDIN}
              className="p-1 rounded-sm bg-transparent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={linkedin.src} alt="Linkedin" className="h-2" />
            </a>
          </div>
        </div>
        {hasBlog && (
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h4 className="mb-0">Latest Articles</h4>
              <Link href="/blog">
                <a>View All</a>
              </Link>
            </div>

            <div className="mt-2">
              <BlogPostList posts={latestBlogs} />
            </div>
          </div>
        )}
        <QuoteList className="mt-4" quotes={motivationQuotes} />
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
