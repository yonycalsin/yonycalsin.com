import * as React from 'react'

function useDynamicBackdrop() {
  const backdropRef = React.useRef<HTMLDivElement>(null)

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement

    if (!(element instanceof HTMLElement) || !backdropRef.current) {
      return
    }

    const { left, top, width, height } = element.getBoundingClientRect()

    backdropRef.current.style.setProperty('--left', `${left}px`)

    backdropRef.current.style.setProperty('--top', `${top}px`)

    backdropRef.current.style.setProperty('--width', `${width}px`)

    backdropRef.current.style.setProperty('--height', `${height}px`)

    backdropRef.current.style.opacity = '1'

    backdropRef.current.style.visibility = 'visible'
  }

  const handleMouseLeave = () => {
    if (!backdropRef.current) {
      return
    }

    backdropRef.current.style.opacity = '0'

    backdropRef.current.style.visibility = 'hidden'
  }

  return { backdropRef, handleMouseEnter, handleMouseLeave }
}

export default useDynamicBackdrop
