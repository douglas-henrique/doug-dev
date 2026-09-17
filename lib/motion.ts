import type { Transition, Variants } from 'framer-motion'

export const motionEase = [0.22, 1, 0.36, 1] as const

export const motionDuration = 0.28

export const fadeTransition: Transition = {
  duration: motionDuration,
  ease: motionEase
}

export const instantTransition: Transition = {
  duration: 0
}

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  shown: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 }
}
