import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import Layout from '../layout';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';

export default class NotFoundPage extends Component {
   static contextType = ThemeContext;

   componentDidMount() {
      const { setNotFound } = this.context;

      setNotFound();
   }

   componentWillUnmount() {
      const { setFound } = this.context;

      setFound();
   }

   render() {
      return (
         <Layout>
            <Helmet title={`Página no encontrada – ${config.siteTitle}`} />
            <SEO />
            <div className="container">
               <div className="text-center">
                  <h1>404</h1>
               </div>
               <p>
                  Se ha producido una excepción fatal 0E en{' '}
                  <span className="tania">0x74616e6961</span> en 404: página no
                  encontrada.
               </p>
               <div className="list">
                  <p>
                     <span className="bullet">*</span> Haga clic en cualquier
                     enlace para terminar la aplicación actual.
                  </p>
                  <p>
                     <span className="bullet">*</span> Presione nuevamente ALT +
                     F4 para reiniciar su navegador. Usted perderá cualquier
                     información no guardada en todas las pestañas.
                  </p>
               </div>
               <p className="text-right">
                  Haga clic en cualquier enlace para continuar
                  <span className="blink">&#9608;</span>
               </p>
            </div>
         </Layout>
      );
   }
}
