import React from 'react'
import { ArrowRight } from '../../components/iconsComponent'
import styles from './styles.module.scss'

export const ScrollHint = () => {
  return (
    <div className={styles.hrScroll}>
      <hr/>
      <button className={styles.btnScrollToTop}>
        <span>S C R O L L</span>
        <ArrowRight className={styles.arrowRight} />
      </button>
    </div>
  )
}
