import * as React from 'react'
import clsx from 'clsx'

import * as modules from './night-mode-button.module.css'

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
         className="appearance-none outline-none bg-yellow-200 dark:bg-gray-700 rounded-full h-40 w-40 absolute overflow-hidden -left-20 -top-20"
         onClick={onToggleDark}
         style={{
            outline: 'none',
         }}
      >
         <div
            className="h-36 top-2 bottom-2 flex flex-col items-stretch justify-between absolute w-16 transform rotate-135 dark:-rotate-45 transition-transform duration-500"
            style={{
               left: 'calc(50% - 2rem)',
            }}
         >
            <span className={clsx(modules.item, 'w-14 h-14')}></span>
            <span
               className={clsx(modules.item, 'w-14 h-14')}
               style={{
                  backgroundPosition: 'bottom',
               }}
            ></span>
         </div>
      </button>
   )
}

export default NightModeButton
