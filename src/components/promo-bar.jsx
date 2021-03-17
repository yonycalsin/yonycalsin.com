import React, { useEffect } from 'react';
import { Link } from 'gatsby';

const PromoBar = () => {
   useEffect(() => {
      document.firstElementChild.classList.add('has-promo-bar');
   }, []);

   return (
     <div className="promo-bar fx fx-cc">
       <p>
         🚀 Mañana llegarán dos nuevos articulos.
         <Link to="/blog">¿Serán los que tanto esperabas?</Link>
         🎁
       </p>
     </div>
   );
};

export default PromoBar;
