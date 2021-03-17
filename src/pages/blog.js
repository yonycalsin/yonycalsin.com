import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

import Layout from '../layout';
import PostListing from '../components/PostListing';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';

import node from '../../content/thumbnails/node.png';
import redux from '../../content/thumbnails/redux.png';
import react from '../../content/thumbnails/react.png';
import vue from '../../content/thumbnails/vue.png';
import bash from '../../content/thumbnails/bash.png';
import css from '../../content/thumbnails/css.png';
import mvc from '../../content/thumbnails/triangle.png';
import terminal from '../../content/thumbnails/terminal.png';
import sql from '../../content/thumbnails/sql.png';
import cookie from '../../content/thumbnails/cookie.png';
import json from '../../content/thumbnails/json.png';
import typescript from '../../content/thumbnails/typescript.png';

const manuals = [
   { name: 'React', image: react, url: '/categories/react' },
   { name: 'Redux', image: redux, url: '/categories/redux' },
   { name: 'Typescript', image: typescript, url: '/categories/typescript' },
   { name: 'Vue', image: vue, url: '/categories/vue' },
   { name: 'Node', image: node, url: '/categories/node' },
   { name: 'Bash', image: bash, url: '/categories/bash' },
   { name: 'CSS', image: css, url: '/categories/css' },
   { name: 'MVC', image: mvc, url: '/categories/mv' },
   { name: 'CLI', image: terminal, url: '/categories/cli' },
   { name: 'SQL', image: sql, url: '/categories/sql' },
   { name: 'Auth', image: cookie, url: '/categories/auth' },
   { name: 'JSON', image: json, url: '/categories/json' },
];

export default class BlogPage extends Component {
   state = {
      searchTerm: '',
      posts: this.props.data.posts.edges,
      filteredPosts: this.props.data.posts.edges,
   };

   handleChange = (event) => {
      const { name, value } = event.target;

      this.setState({ [name]: value }, () => this.filterPosts());
   };

   filterPosts = () => {
      const { posts, searchTerm } = this.state;

      const filteredPosts = posts.filter((post) =>
         post.node.frontmatter.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      );

      this.setState({ filteredPosts });
   };

   render() {
      const { filteredPosts, searchTerm } = this.state;
      const filterCount = filteredPosts.length;
      const categories = this.props.data.categories.group;

      return (
        <Layout>
          <Helmet title={`Artículos – ${config.siteTitle}`} />
          <SEO />
          <div className="gradient-section articles">
            <div className="container">
              <h2 className="text-center">
                Los manuales de instrucciones que faltan en la web
              </h2>
              <div className="instruction-manuals">
                {manuals.map((manual) => (
                  <Link to={manual.url} key={manual.url}>
                    <img src={manual.image} alt={manual.name} />
                    <h3>{manual.name}</h3>
                  </Link>
                     ))}
              </div>
            </div>
          </div>
          <div className="container">
            <h1 className="articles-title">Artículos</h1>
            <div className="category-container">
              {categories.map((category) => {
                     return (
                       <Link
                         to={`/categories/${category.fieldValue.toLowerCase()}`}
                         className="category-filter"
                         key={category.fieldValue}
                       >
                         {category.fieldValue}
                       </Link>
                     );
                  })}
            </div>
            <div className="search-container">
              <input
                className="search"
                type="text"
                name="searchTerm"
                value={searchTerm}
                placeholder="Type here to filter posts..."
                onChange={this.handleChange}
              />
              <div className="filter-count">{filterCount}</div>
            </div>
            <PostListing postEdges={filteredPosts} />
          </div>
        </Layout>
      );
   }
}

export const pageQuery = graphql`
   query BlogQuery {
      posts: allMarkdownRemark(
         limit: 2000
         sort: { fields: [fields___date], order: DESC }
         filter: { frontmatter: { template: { eq: "post" } } }
      ) {
         edges {
            node {
               fields {
                  slug
                  date
               }
               excerpt(pruneLength: 180)
               timeToRead
               frontmatter {
                  title
                  tags
                  categories
                  thumbnail {
                     childImageSharp {
                        fixed(width: 50, height: 50) {
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
      categories: allMarkdownRemark(limit: 2000) {
         group(field: frontmatter___categories) {
            fieldValue
            totalCount
         }
      }
   }
`;
