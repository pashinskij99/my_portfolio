import React from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useRouter } from 'next/router'

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    // y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    // y: 40,
    transition: {
      duration: 0.75,
    },
  },
}

const TransitionPage = ({ children }) => {
  const { asPath } = useRouter()
  // const shouldReduceMotion = useReducedMotion()

  return (
    <div className={styles.wrapper}>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={variants}
          animate='in'
          initial='out'
          exit='out'
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TransitionPage
