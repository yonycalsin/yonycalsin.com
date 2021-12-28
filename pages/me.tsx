import * as React from 'react'

import { Meta } from '~/components/meta'
import { MainLayout } from '~/layouts'

export default function Home() {
  return (
    <MainLayout>
      <Meta title="Sobre Mi" />

      <article className="article">
        <header>
          <h1>Sobre Mi</h1>
          <blockquote>
            <q>Desarrollador de software, open-sourcerer (OSS).</q>
          </blockquote>
        </header>

        <p>
          Hola, soy Yony. Soy un desarrollador de software <b>autodidacta</b> que trabaja en{' '}
          <a href="https://riqra.com/" target="_blank" rel="noopener noreferrer">
            Riqra
          </a>
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
            <a href="https://riqra.com/" target="_blank" rel="noopener noreferrer">
              Riqra.
            </a>
          </li>
          <li>Escribo sobre GraphQL y Api REST.</li>
          <li>Creando mi blog con contentlayer, prisma, planetscale (MYSQL), y MDX.</li>
          <li>
            Leyendo el libro{' '}
            <a href="https://basecamp.com/shapeup" target="_blank" rel="noopener noreferrer">
              Shape Up
            </a>{' '}
            de Basecamp.
          </li>
        </ul>

        <p>Estos son algunos apuntes al azar acerca de mí:</p>

        <ul>
          <li>
            Me fascina escribir código limpio y hermoso <i>(Clean Code)</i>.
          </li>
          <li>Escribí mi primera linea de codigo a los 14 años.</li>
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
            <a href="https://github.com/yonycalsin" target="_blank" rel="noopener noreferrer">
              @yonycalsin
            </a>
          </li>
          <li>
            <strong>Twitter</strong>:{' '}
            <a href="https://twitter.com/yonycalsin" target="_blank" rel="noopener noreferrer">
              @yonycalsin
            </a>
          </li>
          <li>
            <strong>Linkedin</strong>:{' '}
            <a href="https://www.linkedin.com/in/yonycalsin/" target="_blank" rel="noopener noreferrer">
              @yonycalsin
            </a>
          </li>
        </ul>

        <h3>Herramientas que uso en mi dia a dia</h3>

        <ul>
          <li>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
              Visual Studio Code
            </a>
            {' + '}
            <a href="https://www.nano-editor.org/" target="_blank" rel="noopener noreferrer">
              Nano
            </a>
          </li>
          <li>Windows Powershell + Windows Subsystem for Linux (Ubuntu)</li>
          <li>Docker Desktop</li>
          <li>
            <a href="https://www.google.com/intl/en-419/chrome/" target="_blank" rel="noopener noreferrer">
              Chrome Navigator
            </a>
          </li>
          <li>
            <a href="https://github.com/" rel="noopener noreferrer">
              Github
            </a>
            {' + '}
            <a href="https://cli.github.com/" target="_blank" rel="noopener noreferrer">
              Github CLI
            </a>
            {' + '}
            <a href="https://github.com/features/actions">Github Actions (CI/CD)</a>
          </li>
          <li>
            <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">
              Notion
            </a>
          </li>
          <li>Vercel + Netlify + Heroku</li>
          <li>Git</li>
          <li>Node Version Manager (NVM)</li>
          <li>
            <a href="https://insomnia.rest/" target="_blank" rel="noopener noreferrer">
              Insomnia (The Collaborative API Client and Design Tool)
            </a>
          </li>
          <li>etc...</li>
        </ul>
      </article>
    </MainLayout>
  )
}
