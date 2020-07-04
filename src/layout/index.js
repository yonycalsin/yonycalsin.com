import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import config from '../../data/SiteConfig';
import favicon from '../images/favicon.png';
import '../styles/main.scss';
import Popup from '../components/popup';
import BackTop from '../components/back-top';
import PromoBar from '../components/promo-bar';

export default class MainLayout extends Component {
   static contextType = ThemeContext;

   render() {
      const { dark, notFound } = this.context;
      const { children } = this.props;
      let themeClass = '';

      if (dark && !notFound) {
         themeClass = 'dark';
      } else if (notFound) {
         themeClass = 'not-found';
      }

      return (
         <>
            <Helmet
               bodyAttributes={{
                  class: `theme ${themeClass}`,
               }}
            >
               <meta name="description" content={config.siteDescription} />
               <link rel="shortcut icon" type="image/png" href={favicon} />
            </Helmet>
            <Popup />
            <PromoBar />
            <Navigation menuLinks={config.menuLinks} />
            <main id="main-content">{children}</main>
            <Footer />
            <BackTop />
         </>
      );
   }
}
