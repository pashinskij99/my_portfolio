import React from 'react'
import { useNProgress } from "@tanem/react-nprogress";
import styles from './styles.module.scss'

export const Progress = ({isAnimating}) => {
  const { animationDuration, isFinished, progress } = useNProgress({isAnimating})
  
  return (
    <div className={styles.wrapper} style={{
      opacity: isFinished ? 0 : 1,
      transition: `opacity ${animationDuration}ms linear`
    }}>
      <div 
        className={styles.progressBar} 
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`
        }}
      ></div>
    </div>
  )
}
