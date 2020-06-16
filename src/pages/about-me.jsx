import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import ThemeContext from '../context/ThemeContext';

export default class AboutMe extends Component {
   static contextType = ThemeContext;

   render() {
      return (
         <Layout>
            <Helmet title={`Acerca de Yoni Calsin - Greyblu `} />
            <SEO />
            <div className="container">
               <h1>Sobre mí</h1>
            </div>
         </Layout>
      );
   }
}
