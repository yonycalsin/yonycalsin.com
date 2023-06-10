import * as React from 'react'

const DynamicBackdrop = React.forwardRef<HTMLDivElement, unknown>((props, ref) => {
  return (
    <div
      className={`
      absolute bg-primary/10 dark:bg-white/50 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10`}
      ref={ref}
    />
  )
})

DynamicBackdrop.displayName = 'DynamicBackdrop'

export default DynamicBackdrop
