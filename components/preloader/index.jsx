import React, {useEffect, useState} from 'react'
import { useNProgress } from "@tanem/react-nprogress";
import styles from './styles.module.scss'
import clsx from 'clsx';

export const Preloader = ({isAnimating}) => {
  const { isFinished, progress } = useNProgress({isAnimating})
  const [title, setTitle] = useState((-1 + progress) * 100)

  useEffect(() => {
    setTitle(Math.floor(progress * 100))
  })

  return (
    <div className={clsx(styles.wrapper, isFinished && styles.wrapper_hide)}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.subtitle}>Loading...</p>
      </div>
      <div className={styles.progressBar}></div>
    </div>
  )
}
