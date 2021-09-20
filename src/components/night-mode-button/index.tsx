import * as React from 'react'
import clsx from 'clsx'

import s from './night-mode-button.module.css'

const STORAGE_KEY = 'color-mode'

const NightModeButton = () => {
   function onToggleDark() {
      const isDark = document.documentElement.classList.contains('dark')

      localStorage.setItem(STORAGE_KEY, isDark ? 'light' : 'dark')

      if (isDark) {
         document.documentElement.classList.remove('dark')
      } else {
         document.documentElement.classList.add('dark')
      }
   }

   return (
      <button
         className="appearance-none outline-none bg-warning-200 dark:bg-gray-700 rounded-full h-20 w-20 fixed overflow-hidden -left-10 -top-10 border border-transparent hover:border-primary z-10"
         onClick={onToggleDark}
         style={{
            outline: 'none',
         }}
      >
         <div
            className="top-1 bottom-1 flex flex-col items-stretch justify-between absolute w-8 transform rotate-135 dark:-rotate-45 transition-transform duration-500"
            style={{
               left: 'calc(50% - 2rem)',
            }}
         >
            <span className={clsx(s.item, 'w-7 h-7')}></span>
            <span
               className={clsx(s.item, 'w-7 h-7')}
               style={{
                  backgroundPosition: 'bottom',
               }}
            ></span>
         </div>
      </button>
   )
}

export default NightModeButton
