'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

import type { PageTransitionProps } from 'typings/components'
import { VARIANTS } from './page-transaction-constants'

function PageTransition(props: PageTransitionProps) {
  const { children } = props

  return (
    <motion.div initial="initial" animate="enter" variants={VARIANTS}>
      {children}
    </motion.div>
  )
}

export default PageTransition
