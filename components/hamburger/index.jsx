import React from 'react'
import { HamburgerMenu, HamburgerMenuClose } from '../iconsComponent'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHamburger } from "../../store/toggleHamburger"
import clsx from 'clsx'

const Hamburger = ({ className = '' }) => {
  const dispatch = useDispatch()

  const { isHamburger } = useSelector(state => state.hamburger)

  return (
    <div className={clsx(styles.wrapper, className)} onClick={() => dispatch(toggleHamburger())}>
      {
        isHamburger
          ? <HamburgerMenuClose className={styles.hamburger} />
          : <HamburgerMenu className={styles.hamburger} />
      }
    </div>
  );
};

export default Hamburger;
