'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeTransition, fadeUpVariants, instantTransition } from '@/lib/motion'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion()
  const transition = reduceMotion ? instantTransition : fadeTransition

  return (
    <motion.div
      variants={fadeUpVariants}
      initial={reduceMotion ? false : 'hidden'}
      animate="shown"
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
