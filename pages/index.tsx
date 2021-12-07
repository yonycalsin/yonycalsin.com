import * as React from 'react'
import dayjs from 'dayjs'
import type { GetStaticPropsResult } from 'next'
import Link from 'next/link'
import { useFeature } from 'toggled'

import github from '~/assets/images/github.svg'
import linkedin from '~/assets/images/linkedin.svg'
import { Meta } from '~/components/meta'
import { HomeLayout } from '~/layouts'
import { dateFormat, socialLinks } from '~/utils/constants'
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
      <div className="hidden md:block">
        <h1 className="text-center dark:text-white ">
          <q>Yony Calsin</q>
        </h1>
      </div>
      <div className="text-center break-words">
        <p className="lead dark:text-gray-100">
          Hola, Soy un ingeniero Fullstack React/Node en{' '}
          <a href="https://riqra.com/" target="_blank" rel="noreferrer">
            Riqra
          </a>
          . A menudo hago proyectos de código abierto y escribo sobre JavaScript moderno, Node.js, Typescript y Graphql.
        </p>
        <div className="flex items-center justify-center space-x-1">
          <a
            href={socialLinks.GITHUB}
            className="border border-transparent hover:border-primary-100 p-1 rounded-sm"
            target="_blank"
            rel="noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={github.src} alt="Github" className="h-2 md:h-3 filter dark:invert" />
          </a>
          <a
            href={socialLinks.LINKEDIN}
            className="hover:bg-primary-100 p-1 rounded-sm"
            target="_blank"
            rel="noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={linkedin.src} alt="Linkedin" className="h-2 md:h-3" />
          </a>
        </div>
      </div>
      {hasBlog && (
        <div className="mt-4">
          <div className="flex justify-between">
            <h2 className="text-h1 font-bold">Latest Articles</h2>
            <Link href="/blog">
              <a>View All</a>
            </Link>
          </div>

          <div className="mt-2">
            {latestBlogs.map((post, index) => {
              return (
                <Link href={`/blog/${post.slug}`} key={post._id}>
                  <a
                    className="flex items-center font-normal justify-between dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1"
                    style={{ textDecoration: 'none' }}
                  >
                    <h3 className="md:text-h3 no-underline">
                      <span className="flex-shrink-0">{index + 1}.- </span> {post.title}
                    </h3>
                    <span className="text-h5">{dayjs(post.publishedAt).format(dateFormat.PROJECT_DATE)}</span>
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      )}
      {!hasBlog && (
        <div className="mt-4">
          <div className="rehype-code-title">src/profile.json</div>
          <pre className="language-json">
            <code className="language-json code-highlight">
              {/* @ts-ignore */}
              <span className="code-line line-number" line="1">
                <span className="token punctuation">{'{'}</span>
                {'\n'}
              </span>
              {/* @ts-ignore */}
              <span className="code-line line-number highlight-line" line="2">
                {'  '}
                <span className="token property">{'"nombre"'}</span>
                <span className="token operator">:</span> <span className="token string">{'"Yony Calsin"'}</span>
                <span className="token punctuation">,</span>
                {'\n'}
              </span>
              {/* @ts-ignore */}
              <span className="code-line line-number" line="3">
                {'  '}
                <span className="token property">{'"usuario"'}</span>
                <span className="token operator">:</span> <span className="token string">{'"@yonycalsin"'}</span>
                <span className="token punctuation">,</span>
                {'\n'}
              </span>
              {/* @ts-ignore */}
              <span className="code-line line-number highlight-line" line="4">
                {'  '}
                <span className="token property">{'"rol"'}</span>
                <span className="token operator">:</span> <span className="token string">{'"Ingeniero Frontend"'}</span>
                <span className="token punctuation">,</span>
                {'\n'}
              </span>
              {/* @ts-ignore */}
              <span className="code-line line-number" line="5">
                {'  '}
                <span className="token property">{'"país"'}</span>
                <span className="token operator">:</span> <span className="token string">{'"Peru"'}</span>
                {'\n'}
              </span>
              {/* @ts-ignore */}
              <span className="code-line line-number" line="6">
                <span className="token punctuation">{'}'}</span>
                {'\n'}
              </span>
            </code>
          </pre>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-2">
        {[
          {
            phrase: 'Hazlo simple: tan simple como sea posible, pero no más.',
            author: 'Albert Einstein',
          },
          {
            phrase:
              'Los programadores de verdad no documentan. Si fue difícil de escribir, debe ser difícil de entender.',
            author: 'Anónimo',
          },
          {
            phrase: 'La constancia es la madre del dominio.',
            author: 'Yony Calsin',
          },
          {
            phrase:
              'El hardware es aquello a lo que puedes dar patadas. Software es aquello a lo que sólo puedes insultar.',
            author: 'Anónimo',
          },
        ].map((quote: any) => (
          <div key={quote.phrase}>
            <blockquote>
              {quote.phrase}
              <br />
              <b>— {quote.author}</b>
            </blockquote>
          </div>
        ))}
      </div>
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
