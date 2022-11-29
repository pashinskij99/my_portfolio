import clsx from 'clsx'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/cloudFirestore'
import styles from './work.module.scss'
import pageImg from '../../assets/images/works/prob-page.png'
import { Header } from '../../components/header'
import { workTitle } from '../../constants'

export const getWork = async (id, setProject) => {
  const docRef = doc(db, 'projects', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) setProject(docSnap.data())
  else setProject(null)
}

const Work = () => {
  const [project, setProject] = useState(null)

  const router = useRouter()

  const pageId = router.query.work

  useEffect(() => {
    pageId && getWork(pageId, setProject)
  }, [pageId])

  return (
    <div className={clsx(styles.container, 'container')}>
      <Header pageTitle={workTitle} />
      <main className={styles.content}>{project ? <PageItem project={project} /> : <Spinner />}</main>
    </div>
  )
}

const PageItem = ({ project }) => {
  return (
    <>
      <nav className={styles.nav}>
        <a target='_blank' href={project.link}>
          Link
        </a>
        <a target='_blank' href={project.github_link}>
          Github
        </a>
      </nav>
      <div className={styles.iframeWrapper}>
        <img src={pageImg.src} alt='' />
      </div>
    </>
  )
}

const Spinner = () => {
  return <h2>Spinner</h2>
}

export default Work
