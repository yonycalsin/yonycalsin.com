import React, { Component } from 'react';
import { Link } from 'gatsby';
import netlify from '../../content/images/netlify.png';
import gatsby from '../../content/thumbnails/gatsby.png';
import github from '../../content/images/github.png';

export default class Footer extends Component {
   render() {
      return (
        <footer className="footer container">
          <div>
            <a
              href="https://ko-fi.com/yonycalsin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ko-Fi
            </a>
            <a
              href="https://patreon.com/yonycalsin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patreon
            </a>
            <Link to="/contacto/">Contacto</Link>
            <a
              href="https://yonycalsin.netlify.app/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSS
            </a>
          </div>
          <div>
            <a
              href="#"
              title="Reload"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                     e.preventDefault();
                     localStorage.clear();
                     return window.location.reload();
                  }}
            >
              <img
                src={'https://image.flaticon.com/icons/svg/853/853672.svg'}
                className="footer-img"
                alt="Reload"
              />
            </a>
            <a
              href="https://github.com/yonycalsin"
              title="Open-source on GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="footer-img" alt="GitHub" />
            </a>
            <a
              href="https://www.netlify.com/"
              title="Hosted by Netlify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={netlify} className="footer-img" alt="Netlify" />
            </a>
            <a
              href="https://www.gatsbyjs.org/"
              title="Built with Gatsby"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: 0 }}
            >
              <img src={gatsby} className="footer-img" alt="Gatsby" />
            </a>
          </div>
        </footer>
      );
   }
}
