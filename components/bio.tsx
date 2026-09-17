'use client'

import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import {
  fadeTransition,
  fadeUpVariants,
  instantTransition
} from '@/lib/motion'

type BioLabels = {
  bio: string
  default: string
  long: string
}

const defaultLabels: BioLabels = {
  bio: 'Bio',
  default: 'Default',
  long: 'Long'
}

function Paragraphs({ text }: { text: string }) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => (
      <p
        key={paragraph}
        className="text-[17px] leading-7 text-neutral-600 dark:text-neutral-300"
      >
        {paragraph.trim()}
      </p>
    ))
}

export function Bio({
  short,
  long,
  labels = defaultLabels
}: {
  short: string
  long: string
  labels?: BioLabels
}) {
  const [mode, setMode] = useState<'default' | 'long'>('default')
  const reduceMotion = useReducedMotion()
  const transition = reduceMotion ? instantTransition : fadeTransition

  const tabClass = (active: boolean) =>
    `relative cursor-pointer pb-2 text-sm ${
      active
        ? 'text-neutral-800 dark:text-neutral-200'
        : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'
    }`

  return (
    <div>
      <div className="flex items-end justify-between border-b border-neutral-200 dark:border-neutral-800">
        <span className="pb-2 text-sm text-neutral-400">{labels.bio}</span>
        <LayoutGroup>
          <div className="flex gap-4">
            {(['default', 'long'] as const).map((value) => {
              const active = mode === value
              const label = value === 'default' ? labels.default : labels.long

              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setMode(value)}
                  className={tabClass(active)}
                >
                  {label}
                  {active ? (
                    <motion.span
                      layoutId="bio-tab"
                      className="absolute inset-x-0 -bottom-px h-px bg-neutral-800 dark:bg-neutral-200"
                      transition={transition}
                    />
                  ) : null}
                </button>
              )
            })}
          </div>
        </LayoutGroup>
      </div>
      <motion.div
        layout
        className="overflow-hidden"
        transition={transition}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={mode}
            variants={fadeUpVariants}
            initial={reduceMotion ? false : 'hidden'}
            animate="shown"
            exit={reduceMotion ? undefined : 'exit'}
            transition={transition}
            className="space-y-5 pt-5"
          >
            <Paragraphs text={mode === 'default' ? short : long} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
