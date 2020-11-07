// @ts-check

import React, { useContext, useEffect } from 'react';
import PopupContext from '../context/PopupContext';

const add = () => {
   document.firstElementChild.classList.add('has-popup');
};
const remove = () => {
   document.firstElementChild.classList.remove('has-popup');
};

const Popup = () => {
   const { showed, hide } = useContext(PopupContext);
   if (!showed) return <></>;

   useEffect(() => {
      if (showed) {
         add();
      } else {
         remove();
      }
   }, [showed]);

   return (
      <div className="popup">
         <div className="container fx fx-rw fx-cc">
            <div
               className="close"
               onClick={() => {
                  hide();
                  remove();
               }}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style={{ color: '#27ae60' }}
               >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
               </svg>
            </div>
            <div className="content">
               <h2>
                  👋 ¿Está comenzando su carrera de{' '}
                  <span>desarrollador web</span>? 😃
               </h2>
               <p>
                  Suscríbete a mi boletín semanal para mejorar tus habilidades
                  de codificación rápidamente, con tutoriales y consejos fáciles
                  de seguir cada semana.
               </p>

               <ul className="fx fx-rw">
                  <li>JavaScript, Node.js &amp; Typescript</li>
                  <li>Tutoriales en profundidad</li>
                  <li>Puntales súper prácticos</li>
                  <li>2-4 minutos de lectura</li>
                  <li>1-click para cancelar la suscripción</li>
                  <li>Nada de spam, ¡libre para siempre!</li>
                  <li>
                     Github (
                     <a
                        href="http://github.com/yonycalsin"
                        target="blank"
                        rel="noopener noreferrer"
                     >
                        @yonycalsin
                     </a>
                     )
                  </li>
                  <li>
                     Twitter (
                     <a
                        href="https://twitter.com/yonycalsin"
                        target="blank"
                        rel="noopener noreferrer"
                     >
                        @yonycalsin
                     </a>
                     )
                  </li>
               </ul>

               <div className="centered-iframe">
                  <iframe
                     width="480"
                     height="150"
                     src="https://yonycalsin.substack.com/embed"
                     frameBorder="0"
                     scrolling="no"
                  ></iframe>
               </div>
               <p style={{ color: '#adb5bd' }}>
                  <i>
                     <b>Nada de spam!</b>. Puedes cancelar la suscripción en
                     cualquier momento.
                  </i>
               </p>
               <p>
                  <a
                     href="#"
                     onClick={(e) => {
                        e.preventDefault();
                        hide();
                        remove();
                     }}
                     rel="noopener noreferrer"
                  >
                     No, gracias!
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Popup;
