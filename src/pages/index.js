import React, { Component } from 'react';
import Helmet from 'react-helmet';
import GitHubButton from 'react-github-btn';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import ProjectListing from '../components/ProjectListing';
import SimpleListing from '../components/SimpleListing';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import projects from '../../data/projects';
import speaking from '../../data/speaking';
import podcasts from '../../data/podcasts';
import quotes from '../../data/quotes';
import PopupContext from '../context/PopupContext';
import avatar from '../images/avatar.jpg';

export default class Index extends Component {
   render() {
      const { data } = this.props;

      const latestPostEdges = data.latest.edges;
      const popularPostEdges = data.popular.edges;

      return (
         <Layout>
            <Helmet
               title={`${config.siteTitle} – Desarrollador Frontend / Frontend Developer`}
            />
            <SEO />
            <div className="container">
               <div className="lead">
                  <div className="elevator">
                     <h1>{`Hola, soy Yoni`} </h1>
                     <p>
                        {''}
                        {`Soy un desarrollador frontend creando proyectos de `}
                        <a
                           href="https://github.com/yonicalsin"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           código abierto
                        </a>{' '}
                        y <Link to="/blog">escribiendo</Link> sobre JavaScript
                        moderno, Node.js, Typescript y Graphql.
                     </p>
                     <div className="social-buttons">
                        <GitHubButton
                           href="https://github.com/yonicalsin"
                           data-size="large"
                           data-show-count="true"
                        >
                           yonicalsin
                        </GitHubButton>
                        <a
                           href="https://twitter.com/yonicalsin"
                           target="_blank"
                           style={{ background: 'transparent' }}
                           rel="noopener noreferrer"
                        >
                           {' '}
                           <img src="https://img.shields.io/twitter/follow/yonicalsin.svg?style=social&label=Follow" />{' '}
                        </a>
                     </div>
                  </div>
                  <div className="newsletter-section">
                     <img
                        src={avatar}
                        className="newsletter-avatar"
                        alt="Yoni Calsin"
                        style={{ border: '3px dashed rgba(255,255,255,.4)' }}
                     />
                     <div>
                        <h3>Email Newsletter</h3>
                        <p>
                           Escribo tutoriales. Recibe una actualización cuando
                           salga algo nuevo inscribiéndote a continuación!
                        </p>
                        <a
                           className="button"
                           href="https://yonicalsin.substack.com"
                           target="blank"
                           onClick={(e) => {
                              e.preventDefault();
                              this.context.show();
                           }}
                        >
                           Suscríbase
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="container front-page">
               <section className="section">
                  <h2>
                     Últimos artículos
                     <Link to="/blog" className="view-all">
                        Ver todo
                     </Link>
                  </h2>
                  <PostListing simple postEdges={latestPostEdges} />
               </section>

               <section className="section">
                  <h2>
                     Más popular
                     <Link to="/categories/popular" className="view-all">
                        Ver todo
                     </Link>
                  </h2>
                  <PostListing simple postEdges={popularPostEdges} />
               </section>

               <section className="section">
                  <h2>Proyectos de código abierto</h2>
                  <ProjectListing projects={projects} />
               </section>

               {/* <section className="section">
                  <h2>Entrevistas</h2>
                  <SimpleListing simple data={podcasts} />
               </section> */}

               {/* <section className="section">
                  <h2>Charlas</h2>
                  <SimpleListing simple data={speaking} />
               </section> */}
            </div>
            <div className="gradient-section">
               <div className="container">
                  <h2>Frases motivadores...</h2>
               </div>
               <div className="quotations">
                  {quotes.map((quote) => (
                     <blockquote className="quotation" key={quote.name}>
                        <p>{quote.quote}</p>
                        <cite>— {quote.name}</cite>
                     </blockquote>
                  ))}
               </div>
            </div>
         </Layout>
      );
   }
}

Index.contextType = PopupContext;

export const pageQuery = graphql`
   query IndexQuery {
      latest: allMarkdownRemark(
         limit: 5
         sort: { fields: [fields___date], order: DESC }
         filter: { frontmatter: { template: { eq: "post" } } }
      ) {
         edges {
            node {
               fields {
                  slug
                  date
               }
               excerpt
               timeToRead
               frontmatter {
                  title
                  tags
                  categories
                  thumbnail {
                     childImageSharp {
                        fixed(width: 150, height: 150) {
                           ...GatsbyImageSharpFixed
                        }
                     }
                  }
                  date
                  template
               }
            }
         }
      }
      popular: allMarkdownRemark(
         limit: 9
         sort: { fields: [fields___date], order: DESC }
         filter: { frontmatter: { categories: { eq: "Popular" } } }
      ) {
         edges {
            node {
               fields {
                  slug
                  date
               }
               excerpt
               timeToRead
               frontmatter {
                  title
                  tags
                  categories
                  thumbnail {
                     childImageSharp {
                        fixed(width: 150, height: 150) {
                           ...GatsbyImageSharpFixed
                        }
                     }
                  }
                  date
                  template
               }
            }
         }
      }
   }
`;
