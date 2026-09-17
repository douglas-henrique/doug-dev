'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { fadeTransition, fadeUpVariants, instantTransition } from '@/lib/motion'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const transition = reduceMotion ? instantTransition : fadeTransition

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={fadeUpVariants}
        initial={reduceMotion ? false : 'hidden'}
        animate="shown"
        exit={reduceMotion ? undefined : 'exit'}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
