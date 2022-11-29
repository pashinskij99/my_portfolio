import React from 'react'
import { useRouter } from 'next/router'
import { H2 } from '../typography'
import styles from './styles.module.scss'
import { animateHomeTitle } from '../../constants'
import { motion } from 'framer-motion'
import Hamburger from '../hamburger'
import clsx from 'clsx'

export const Header = ({ pageTitle }) => (
  // <div className={clsx(styles.header, useRouter().asPath === '/' && styles.hide)}>
  <div className={clsx(styles.header)}>
    {/* <div className={clsx('container', styles.container)}> */}
      <H2 className={[styles.title]}>
        {pageTitle.map((item, i) => (
          <motion.span whileHover={animateHomeTitle} key={i} className={styles.titleWord}>
            {item}
          </motion.span>
        ))}
      </H2>
      <div className={styles.hr} />
      <Hamburger />
    {/* </div> */}
  </div>
)
