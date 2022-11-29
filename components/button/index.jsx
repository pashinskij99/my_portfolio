import clsx from 'clsx'
import { ArrowRight } from '../iconsComponent'
import { useDispatch } from 'react-redux'
import { changeCursor } from '../../store/cursor'
import styles from './styles.module.scss'

export const ButtonContact = ({ children, onClick, className }) => {
  const dispatch = useDispatch()

  return (
    <button
      onMouseEnter={() => dispatch(changeCursor('onEnter'))}
      onMouseLeave={() => dispatch(changeCursor('default'))}
      onClick={onClick}
      className={clsx(styles.btn, styles.btnContact, ...className)}
    >
      <span className={styles.btnContact__text}>{children}</span>
      <ArrowRight className={styles.btnContact__icon} />
    </button>
  )
}

export const ButtonResume = ({ children, onClick }) => {
  const dispatch = useDispatch()

  return (
    <button
      onMouseEnter={() => dispatch(changeCursor('onEnter'))}
      onMouseLeave={() => dispatch(changeCursor('default'))}
      onClick={onClick}
      className={clsx(styles.btn, styles.btnResume)}
    >
      <span>{children}</span>
    </button>
  )
}

export const ButtonMore = ({ children, onClick, className }) => {
  const dispatch = useDispatch()

  return (
    <button
      onMouseEnter={() => dispatch(changeCursor('onEnter'))}
      onMouseLeave={() => dispatch(changeCursor('default'))}
      onClick={onClick}
      className={clsx(styles.btn, styles.btnMore, ...className)}
    >
      <span>{children}</span>
    </button>
  )
}
