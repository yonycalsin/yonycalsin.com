import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import ThemeContext from '../context/ThemeContext';
import projects from '../../data/projects';

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
                        Soy Tania Rascia, una desarrolladora de software,
                        escritora técnica y ex cocinera. Esta página web es un
                        compendio de las cosas que he aprendido a lo largo de
                        los años.
                     </p>
                     <p>
                        Mi objetivo es crear un bello rincón de la web libre de
                        anuncios, posts patrocinados, pop-ups de boletines,
                        enlaces de afiliados, y el resto del molesto ruido que
                        estamos tan acostumbrados a ver en Internet en estos
                        días.
                     </p>
                     <p>
                        Puede leer mis
                        <a href="https://www.greyblu.com/blog">
                           {' artículos '}
                        </a>
                        o
                        <a href="https://www.greyblu.com/contact">
                           {' contactarme'}
                        </a>
                        .
                     </p>
                     <h3>Yoni Calsin</h3>

                     <ul>
                        <li>
                           💻 trabaja como desarrollador de software
                           (principalmente React/Redux, Node)
                        </li>
                        <li>👍 tiene un título imaginario en electrónica</li>
                        <li>
                           🚀 ha hecho un viaje de mochilero en solitario a unos
                           20 países
                        </li>
                        <li>🎉 puede hablar un poco de ingles</li>
                        <li>💾 tiene el mejor manejo de reddit</li>
                        <li>🎹 puede tocar el piano y la guitarra</li>
                        <li>☕ necesita café</li>
                        <li>
                           ✍️ ha escrito alrededor de 5 tutoriales (¡hasta
                           ahora!)
                        </li>
                     </ul>

                     <p>Este sitio web ha sido inspirado en la cuarentena.</p>

                     <h2>Proyectos de código abierto</h2>

                     <ul>
                        {projects.map((v) => (
                           <li>
                              <a href={v.path}>{v.title}</a> - {v.description}
                           </li>
                        ))}
                     </ul>
                  </div>
               </article>
            </div>
         </Layout>
      );
   }
}
