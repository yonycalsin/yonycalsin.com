import React, { useEffect, useState } from 'react';
import ArrowUp from '../images/arrow-up.svg';

const duration = 700;
const inOutSine = (n) => 0.5 * (1 - Math.cos(Math.PI * n));
const getScrollTop = () =>
   document.body.scrollTop || document?.documentElement?.scrollTop || 0;
const setScrollTop = (top) =>
   window.scrollTo({
      top,
   });
const scrollUp = () => {
   const { performance, requestAnimationFrame } = window;

   const scrollTo = 0;
   if (
      duration <= 0 ||
      typeof performance === 'undefined' ||
      typeof requestAnimationFrame === 'undefined'
   ) {
      return setScrollTop(scrollTo);
   }
   const start = performance.now();
   const initScrollTop = getScrollTop();
   const pxsToScrollBy = initScrollTop - scrollTo;

   requestAnimationFrame(step);

   function step(timestamp) {
      const progress = Math.min((timestamp - start) / duration, 1);
      setScrollTop(
         initScrollTop - Math.round(inOutSine(progress) * pxsToScrollBy),
      );
      if (progress < 1) {
         requestAnimationFrame(step);
      }
   }
};

const BackTop = () => {
   const [showed, setShowed] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;
         if (currentScrollY < 200 && showed) {
            setShowed(false);
         }
         if (currentScrollY > 200 && !showed) {
            setShowed(true);
         }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => window.removeEventListener('scroll', handleScroll);
   }, [showed]);

   return (
      <div
         className={`backtop fx fx-cc ${showed ? 'showed' : ''} `}
         onClick={() => scrollUp()}
      >
         <img src={ArrowUp} alt="" />
      </div>
   );
};

export default BackTop;
