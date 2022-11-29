import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import useOnScreen from '../../hooks/useOnScreen'

const LoadableImage = ({ src, alt = '', onLoad = () => {} }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef(null)
  const containerRef = useRef(null)
  const isVisible = useOnScreen(containerRef)

  useEffect(() => {
    if (!isVisible || isLoaded) return

    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true)
        // onLoad()
      }
    }
  }, [isVisible, onLoad, isLoaded])

  return (
    <div
      ref={containerRef}
      className={clsx(styles.container, {
        [styles.containerLoaded]: isLoaded,
      })}
    >
      {(isVisible || isLoaded) && (
        <img
          ref={imageRef}
          className={clsx(styles.image, {
            [styles.imageLoaded]: isLoaded,
          })}
          src={src}
          alt={alt}
        />
      )}
    </div>
  )
}

export default LoadableImage
