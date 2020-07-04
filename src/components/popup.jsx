// @ts-check

import React, { useContext } from 'react';
import PopupContext from '../context/PopupContext';

const Popup = () => {
   const { showed, hide } = useContext(PopupContext);
   if (!showed) return <></>;
   return (
      <div className="popup">
         <div className="container fx fx-rw fx-cc">
            <div className="close" onClick={hide}>
               X
            </div>
            <div className="content">
               <h2>👋 Are you starting your software engineering career?</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  illum repellat quod labore qui in inventore enim dolorum
                  repudiandae placeat quis cum dicta reiciendis, impedit nihil!
                  Unde dicta ullam officiis!
               </p>
            </div>
         </div>
      </div>
   );
};

export default Popup;
