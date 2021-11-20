import * as React from 'react'

import { Meta } from '~/components/meta'
import { HomeLayout } from '~/layouts'
import { socialLinks } from '~/utils/constants'

export default function Home() {
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
          Soy un desarrollador frontend creando proyectos de código abierto y escribiendo de JavaScript moderno,
          Node.js, Typescript y Graphql.
        </p>
        <div className="flex items-center justify-center space-x-1">
          <a
            href={socialLinks.GITHUB}
            className="border border-transparent hover:border-primary-100 p-1 rounded-sm"
            target="_blank"
            rel="noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.svgporn.com/logos/github.svg"
              alt="Linkedin"
              className="h-2 md:h-3 filter dark:invert"
            />
          </a>
          <a
            href={socialLinks.LINKEDIN}
            className="hover:bg-primary-100 p-1 rounded-sm"
            target="_blank"
            rel="noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cdn.svgporn.com/logos/linkedin.svg" alt="Linkedin" className="h-2 md:h-3" />
          </a>
        </div>
      </div>

      <div>
        <pre>
          <code className="gradient-primary text-black font-bold">
            {JSON.stringify(
              {
                nombre: 'Yony Calsin',
                usuario: '@yonycalsin',
                rol: 'Ingeniero Frontend',
                país: 'Peru',
              },
              undefined,
              2,
            )}
          </code>
        </pre>
      </div>

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
