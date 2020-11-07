import React, { Component } from 'react';
import { Link } from 'gatsby';
// import greyblu from '../images/greyblu.png';
import sun from '../images/sun.svg';
import moon from '../images/moon.svg';
import logo from '../images/logo.svg';
import kofi from '../images/kofi.png';
import ThemeContext from '../context/ThemeContext';

export default class Navigation extends Component {
   static contextType = ThemeContext; // eslint-disable-line

   state = {
      scrolled: false,
   };

   componentDidMount() {
      window.addEventListener('scroll', this.navOnScroll);
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.navOnScroll);
   }

   navOnScroll = () => {
      if (window.scrollY > 20) {
         this.setState({ scrolled: true });
      } else {
         this.setState({ scrolled: false });
      }
   };

   render() {
      const { scrolled } = this.state;
      const { menuLinks } = this.props;
      const theme = this.context;

      return (
         <nav className={scrolled ? 'nav scroll' : 'nav'}>
            <div className="nav-container">
               <div className="brand">
                  <Link to="/">
                     <img src={logo} className="favicon" alt="Greyblu Logo" />
                     <span className="text">Yony Calsin</span>
                  </Link>
               </div>
               <div className="links">
                  {menuLinks.map((link) => (
                     <Link
                        key={link.name}
                        to={link.link}
                        activeClassName="active"
                     >
                        {link.name}
                     </Link>
                  ))}
               </div>
               <div className="cta">
                  <button
                     className="dark-switcher"
                     onClick={theme.toggleDark}
                     aria-label="Toggle Dark Mode."
                     title="Toggle Dark Mode"
                  >
                     {theme.dark ? (
                        <img
                           src={sun}
                           className="theme-icon"
                           alt="Light Mode"
                        />
                     ) : (
                        <img
                           src={moon}
                           className="theme-icon"
                           alt="Dark Mode"
                        />
                     )}
                  </button>

                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://github.com/yonycalsin"
                     aria-label="¡Cómprame un café!"
                     title="¡Cómprame un café!"
                  >
                     <img
                        src="https://image.flaticon.com/icons/svg/1051/1051326.svg"
                        alt="Github"
                        className="kofi"
                        height="18px"
                        width="18px"
                     />
                  </a>
                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://twitter.com/yonycalsin"
                     aria-label="¡Cómprame un café!"
                     title="¡Cómprame un café!"
                  >
                     <img
                        src="https://image.flaticon.com/icons/svg/733/733579.svg"
                        alt="Twitter"
                        className="kofi"
                        height="18px"
                        width="18px"
                     />
                  </a>
                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://ko-fi.com/yonycalsin"
                     aria-label="¡Cómprame un café!"
                     title="¡Cómprame un café!"
                  >
                     <img src={kofi} alt="Kofi" className="kofi" />
                  </a>
               </div>
            </div>
         </nav>
      );
   }
}
