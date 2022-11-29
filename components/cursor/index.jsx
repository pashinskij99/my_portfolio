import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

const Cursor = () => {
  const mainCursor = useRef(null)
  const secondaryCursor = useRef(null)

  const { cursor } = useSelector((state) => state.cursor)

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  })

  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event

      const mouseX = clientX
      const mouseY = clientY

      mainCursor.current.style.opacity = '1'
      secondaryCursor.current.style.opacity = '1'

      positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2
      positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2
      mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${
        mouseY - mainCursor.current.clientHeight / 2
      }px, 0)`
    }
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse)
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1
        if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.destinationX += distanceX
          positionRef.current.destinationY += distanceY
        }
      }
      secondaryCursor.current.style.top = `${destinationY}px`
      secondaryCursor.current.style.left = `${destinationX}px`
    }
    followMouse()
  }, [])

  return (
    <>
      <div ref={mainCursor} className={clsx(styles.cursor, cursor === 'onEnter' ? styles.onEnter : null)} />
      <div
        ref={secondaryCursor}
        className={clsx(styles.cursorFollower, cursor === 'onEnter' ? styles.onEnter : null)}
      />
    </>
  )
}

export default Cursor
