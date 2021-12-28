import * as React from 'react'
import { motion } from 'framer-motion'

interface PageTransitionProps {
  children: React.ReactNode
}

const variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
}

export function PageTransition(props: PageTransitionProps) {
  const { children } = props

  return (
    <motion.div initial="initial" animate="enter" variants={variants}>
      {children}
    </motion.div>
  )
}
