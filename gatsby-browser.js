import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import { PopupProvider } from './src/context/PopupContext';

export const wrapRootElement = ({ element }) => (
   <>
      <PopupProvider>
         <ThemeProvider>{element}</ThemeProvider>
      </PopupProvider>
   </>
);
