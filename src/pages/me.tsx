import * as React from 'react'

import { Meta } from '~/components/meta'
import { HomeLayout } from '~/layouts'

export default function Home() {
  return (
    <HomeLayout>
      <Meta title="Sobre Mi" />
      <h1>Sobre Mi</h1>
      <p>
        Hola, soy Yony Calsin, desarrollador frontend, apasionado de la programación web (frontend, backend), a lo largo
        de mi carrera he tenido la oportunidad de trabajar en varios proyectos que me han dado la oportunidad de
        ejecutar mis conocimientos en estas áreas y también de seguir aprendiendo sobre ellas.
      </p>

      <ul>
        <li>
          <strong>Email</strong>: <a href="mailto:helloyonycalsin@gmail.com">@yonycalsin</a>
        </li>
        <li>
          <strong>GitHub</strong>:{' '}
          <a href="https://github.com/yonycalsin" target="_blank" rel="noreferrer">
            @yonycalsin
          </a>
        </li>
        <li>
          <strong>Twitter</strong>:{' '}
          <a href="https://twitter.com/yonycalsin" target="_blank" rel="noreferrer">
            @yonycalsin
          </a>
        </li>
        <li>
          <strong>Patreon</strong>:{' '}
          <a href="https://patreon.com/yonycalsin" target="_blank" rel="noreferrer">
            @yonycalsin
          </a>
        </li>
        <li>
          <strong>Ko-Fi</strong>:{' '}
          <a href="https://ko-fi.com/yonycalsin" target="_blank" rel="noreferrer">
            @yonycalsin
          </a>
        </li>
        <li>
          <strong>Feed</strong>:{' '}
          <a href="https://yonycalsin.netlify.app/rss.xml" target="_blank" rel="noreferrer">
            RSS
          </a>
        </li>
      </ul>
    </HomeLayout>
  )
}
