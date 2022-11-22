import clsx from 'clsx'
import {doc, getDoc} from 'firebase/firestore'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import {TitlePage} from '../../components/titlePage'
import {db} from '../../firebase/cloudFirestore'
import styles from './work.module.scss'
import {workTitle} from "../../constants";

export const getWork = async (id, setProject) => {
  const docRef = doc(db, "projects", id)
  const docSnap = await getDoc(docRef);

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
    <div className={clsx(styles.container, "container")}>
      <TitlePage pageTitle={workTitle}/>

      <main className={styles.content}>
        {
          project
            ? <PageItem project={project}/>
            : <Spinner/>
        }

      </main>
    </div>
  )
}

const PageItem = ({project}) => {
  return (
    <>
      <nav className={styles.nav}>
        <a target="_blank" href={project.link}>Link</a>
        <a target="_blank" href={project.github_link}>Github</a>
      </nav>
      <div className={styles.iframeWrapper}>
        <iframe className={styles.iframe} src={project.link} frameBorder={0}></iframe>
      </div>
    </>
  )
}

const Spinner = () => {
  return <h2>Spinner</h2>
}

export default Work
