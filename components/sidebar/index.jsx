import Link from 'next/link'
import React from 'react'
import {pageUrl, sideBarNav, sidebarSocialLinks} from '../../constants'
import styles from './styles.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {changeCursor} from '../../store/cursor'
import {Logo} from '../iconsComponent'
import clsx from 'clsx'
import {toggleHamburger} from "../../store/toggleHamburger";

export const SideBar = () => {
  const dispatch = useDispatch()

  const { isHamburger } = useSelector(state => state.hamburger)

  return (
    <div className={clsx(styles.sidebar, isHamburger && styles.active)}>
      <div className={styles.sidebar__logo}>
        <Link href={pageUrl.home}>
          <a
            onMouseEnter={() => dispatch(changeCursor('onEnter'))}
            onMouseLeave={() => dispatch(changeCursor('default'))}
            onClick={() => dispatch(toggleHamburger())}
          >
            <Logo className={styles.sidebar__logoImg} />
          </a>
        </Link>
      </div>
      <div className={styles.sidebar__nav}>
        <ul className={styles.sidebar__ul}>
          {
            sideBarNav.map(({name, href, id}) => (
              <li key={id} className={styles.sidebar__li}>
                <Link href={href}>
                  <a
                    onMouseEnter={() => dispatch(changeCursor('onEnter'))}
                    onMouseLeave={() => dispatch(changeCursor('default'))}
                    onClick={() => dispatch(toggleHamburger())}
                    className={styles.sidebar__a}
                  >
                    {name}
                  </a>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className={styles.sidebar__socialLinks}>
        <ul className={styles.sidebar__socialUl}>
          {sidebarSocialLinks.map(({id, SvgComponent, href}) => (
              <li key={id} className={styles.sidebar__socialLi}>
                <a href={href} className={styles.sidebar__socialLink}>
                  <SvgComponent className={styles.sidebar__socialIcon} />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}


