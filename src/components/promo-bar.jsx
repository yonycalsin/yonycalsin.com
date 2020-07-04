// @ts-check

import React, { useEffect } from 'react';

const PromoBar = () => {
   useEffect(() => {
      document.firstElementChild.classList.add('has-promo-bar');
   }, []);

   return (
      <div className="promo-bar fx fx-cc">
         <p>
            Defendamos 🎉 <a href="/">#BlackLivesMatter</a>{' '}
         </p>
      </div>
   );
};

export default PromoBar;
