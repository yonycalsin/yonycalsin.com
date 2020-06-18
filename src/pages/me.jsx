import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import ThemeContext from '../context/ThemeContext';
import projects from '../../data/projects';
import { Link } from 'gatsby';

export default class AboutMe extends Component {
   static contextType = ThemeContext;

   render() {
      return (
         <Layout>
            <Helmet title={`Acerca de Yoni Calsin - Greyblu `} />
            <SEO />
            <div className="container">
               <article>
                  <header className="page-header">
                     <h1>Sobre mí</h1>
                  </header>
                  <div className="page">
                     <p>
                        Soy Yoni Calsin, una desarrollador full stack,
                        actualmente me especializo como frontend (React, Next,
                        Redux, Gatsby), escritor técnico y musico (guitarra,
                        piano). Esta página web es un compendio de las cosas que
                        he aprendido a lo largo de los años.
                     </p>
                     <p>Mi objetivo es crear un bello rincón de la web.</p>
                     <p>
                        Puede leer mis
                        <Link to="/blog">{' artículos '}</Link>o
                        <Link to="/contact">{' contactarme'}</Link>.
                     </p>
                     <h3>Yoni Calsin</h3>

                     <ul>
                        <li>
                           💻 trabaja como desarrollador frontend
                           (principalmente React/Redux, Node, Next, Typescript,
                           SCSS)
                        </li>
                        <li>👍 tiene un título imaginario en electrónica</li>
                        <li>🎉 puede hablar un poco de ingles</li>
                        <li>💾 tiene el mejor manejo de reddit y medium</li>
                        <li>🎹 puede tocar el piano y la guitarra</li>
                        <li>☕ necesita café</li>
                        <li>
                           ✍️ ha escrito alrededor de 5 tutoriales (¡hasta
                           ahora!)
                        </li>
                     </ul>

                     <p>
                        Este sitio web ha sido inspirado en la cuarentena. 🙃
                     </p>

                     <h2>Proyectos de código abierto</h2>

                     <ul>
                        {projects.map((v) => (
                           <li>
                              <a href={v.path}>{v.title}</a> - {v.description}
                           </li>
                        ))}
                     </ul>

                     <h2>Actualmente usando</h2>
                     <ul>
                        <li>
                           <strong>Computadora:</strong> Windows <q>10</q>
                        </li>
                        <li>
                           <strong>Host:</strong>{' '}
                           <a href="https://netlify.com">Netlify</a>
                        </li>
                        <li>
                           <strong>Editor:</strong>{' '}
                           <a href="https://code.visualstudio.com/">
                              Visual Studio Code
                           </a>
                        </li>
                        <li>
                           <strong>SSG:</strong>{' '}
                           <a href="https://gatsbyjs.org">Gatsby</a>
                        </li>
                        <li>
                           <strong>Tema:</strong>{' '}
                           <a href="https://taniarascia.github.io/new-moon">
                              New Moon
                           </a>
                        </li>
                        <li>
                           <strong>Newsletter:</strong>{' '}
                           <a href="https://substack.com">Substack</a>
                        </li>
                     </ul>
                  </div>
               </article>
            </div>
         </Layout>
      );
   }
}
