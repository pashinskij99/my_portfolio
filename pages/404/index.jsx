import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import { index } from '../../constants'
import { ArrowLeft } from '../../components/iconsComponent'

const Page404 = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <h1 className={styles.h1}>
          404 error
        </h1>
        <p className={styles.paragraph}>
          Such page does not exist or it has been deleted
        </p>
        <Link href={index.home}>
          <a className={styles.btnHome}>
            <ArrowLeft className={styles.arrow} />
            <span>Back home</span>
          </a>
        </Link>
      </main>
    </div>
  )
}

export default Page404
