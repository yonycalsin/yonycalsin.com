import * as React from 'react'

import { Anchor } from '~/components/anchor/anchor'
import { Meta } from '~/components/meta'
import recommendations from '~/data/config/es/recomendations.json'
import { MainLayout } from '~/layouts'

export default function Home() {
  return (
    <MainLayout>
      <Meta title="Sobre Mi" />

      <article className="markdown article pt-4">
        <header>
          <h1>Sobre Mi</h1>
          <blockquote>
            <q>Desarrollador de software, open-sourcerer (OSS).</q>
          </blockquote>
        </header>

        <p>
          Hola, soy Yony. Soy un desarrollador de software <b>autodidacta</b> que trabaja en{' '}
          <Anchor variant="decorated" href="https://riqra.com/" target="_blank" rel="noopener noreferrer">
            Riqra
          </Anchor>
          . Bienvenidos a mi espacio en la web para proyectos que he creado, reflexiones y cualquier otra cosa que
          quiera mostrar al mundo.
        </p>

        <p>
          Me encanta crear proyectos de código abierto y compartir lo que aprendo. Este sitio web es mi patio digital,
          un compendio de las cosas que he aprendido y creado a lo largo de los años.
        </p>

        <h3>Lo que estoy haciendo ahora</h3>

        <ul>
          <li>
            Actualmente trabajo a tiempo completo en{' '}
            <Anchor variant="decorated" href="https://riqra.com/" target="_blank" rel="noopener noreferrer">
              Riqra.
            </Anchor>
          </li>
          <li>Escribo sobre GraphQL y Api REST.</li>
          <li>Creando mi blog con contentlayer, prisma, planetscale (MYSQL), y MDX.</li>
          <li>
            Leyendo el libro{' '}
            <Anchor variant="decorated" href="https://basecamp.com/shapeup" target="_blank" rel="noopener noreferrer">
              Shape Up
            </Anchor>{' '}
            de Basecamp.
          </li>
        </ul>

        <p>Estos son algunos apuntes al azar acerca de mí:</p>

        <ul>
          <li>
            Me fascina escribir código limpio y hermoso <i>(Clean Code)</i>.
          </li>
          <li>Mi tipo de juego favorito actual es el de estrategia.</li>
          <li>Llevo escribiendo en este blog desde 2017.</li>
        </ul>

        <h3>Contacto</h3>

        <p>
          Puedes contactar conmigo por correo electrónico en <i>helloyonycalsin at gmail.com</i>.
        </p>

        <ul>
          <li>
            <strong>GitHub</strong>:{' '}
            <Anchor variant="decorated" href="https://github.com/yonycalsin" target="_blank" rel="noopener noreferrer">
              @yonycalsin
            </Anchor>
          </li>
          <li>
            <strong>Twitter</strong>:{' '}
            <Anchor variant="decorated" href="https://twitter.com/yonycalsin" target="_blank" rel="noopener noreferrer">
              @yonycalsin
            </Anchor>
          </li>
          <li>
            <strong>Linkedin</strong>:{' '}
            <Anchor
              variant="decorated"
              href="https://www.linkedin.com/in/yonycalsin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @yonycalsin
            </Anchor>
          </li>
        </ul>

        <h3>Herramientas que uso en mi dia a dia</h3>

        <ul>
          <li>
            <Anchor variant="decorated" href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
              Visual Studio Code
            </Anchor>
            {' + '}
            <Anchor variant="decorated" href="https://www.nano-editor.org/" target="_blank" rel="noopener noreferrer">
              Nano
            </Anchor>
          </li>
          <li>Windows Powershell + Windows Subsystem for Linux (Ubuntu)</li>
          <li>Docker Desktop</li>
          <li>
            <Anchor
              variant="decorated"
              href="https://www.google.com/intl/en-419/chrome/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chrome Navigator
            </Anchor>
          </li>
          <li>
            <Anchor variant="decorated" href="https://github.com/" rel="noopener noreferrer">
              Github
            </Anchor>
            {' + '}
            <Anchor variant="decorated" href="https://cli.github.com/" target="_blank" rel="noopener noreferrer">
              Github CLI
            </Anchor>
            {' + '}
            <Anchor variant="decorated" href="https://github.com/features/actions">
              Github Actions (CI/CD)
            </Anchor>
          </li>
          <li>
            <Anchor variant="decorated" href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">
              Notion
            </Anchor>
          </li>
          <li>Vercel + Netlify + Heroku</li>
          <li>Git</li>
          <li>Node Version Manager (NVM)</li>
          <li>
            <Anchor variant="decorated" href="https://insomnia.rest/" target="_blank" rel="noopener noreferrer">
              Insomnia (The Collaborative API Client and Design Tool)
            </Anchor>
          </li>
          <li>etc...</li>
        </ul>

        <div className="grid gap-3 md:grid-cols-2">
          {recommendations.map(recommendation => (
            <blockquote key={recommendation.text}>
              <p className="mb-1">{recommendation.text}</p>
              <div className="text-left">
                <Anchor variant="decorated" href={recommendation.author.linkedin} target="_blank" rel="noreferrer">
                  <b>— {recommendation.author.name}</b>
                </Anchor>
                <p className="mt-1 mb-0 text-gray text-sm ">{recommendation.author.title}</p>
              </div>
            </blockquote>
          ))}
        </div>
      </article>
    </MainLayout>
  )
}
