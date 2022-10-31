import React, {Dispatch, SetStateAction} from 'react'
import {Github, Gmail, Linkedin, Logo, Telegram} from "../iconsComponent"
import Link from "next/link"
import styles from "./styles.module.scss"

interface ISideBar {
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const SideBar : React.FC<ISideBar> = ({ setOpen }) => {

  console.log(setOpen)
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <Link href='/'>
          <a>
            <Logo className={styles.sidebar__logoImg} />
          </a>
        </Link>
      </div>
      <div className={styles.sidebar__nav}>
        <ul className={styles.sidebar__ul}>
          <li className={styles.sidebar__li}>
            <Link className={styles.sidebar__a} href='/'>Home</Link>
          </li>
          <li className={styles.sidebar__li}>
            <Link className={styles.sidebar__a} href='/about'>About me</Link>
          </li>
          <li className={styles.sidebar__li}>
            <Link className={styles.sidebar__a} href='/skills'>My Skills</Link>
            </li>
          <li className={styles.sidebar__li}>
            <Link className={styles.sidebar__a} href='/works'>Work</Link>
          </li>
          <li className={styles.sidebar__li}>
            <Link className={styles.sidebar__a} href='/contact'>Contact me</Link>
          </li>
        </ul>
      </div>
      <div className={styles.sidebar__socialLinks}>
        <div className={styles.sidebar__socialUl}>
          <li className={styles.sidebar__socialLi}>
            <a href="#" className={styles.sidebar__socialLink}>
              <Linkedin className={styles.sidebar__socialIcon} />
            </a>
          </li>
          <li className={styles.sidebar__socialLi}>
            <a href="#" className={styles.sidebar__socialLink}>
              <Gmail className={styles.sidebar__socialIcon} />
            </a>
          </li>
          <li className={styles.sidebar__socialLi}>
            <a href="#" className={styles.sidebar__socialLink}>
              <Telegram className={styles.sidebar__socialIcon} />
            </a>
          </li>
          <li className={styles.sidebar__socialLi}>
            <a href="#" className={styles.sidebar__socialLink}>
              <Github className={styles.sidebar__socialIcon} />
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}


