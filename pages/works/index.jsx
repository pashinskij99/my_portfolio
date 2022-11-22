import clsx from 'clsx'
import Link from 'next/link'
import { ButtonMore } from '../../components/button'
import { ScrollHint } from '../../components/scrollHint'
import { TitlePage } from '../../components/titlePage'
import { pageUrl, workTitle } from '../../constants'
import styles from './works.module.scss'
import { useDispatch } from 'react-redux'
import { changeCursor } from '../../store/cursor'
import LoadableImage from '../../components/loadableImage'
import { useFetchProjectsQuery } from '../../store/projects'

const Works = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isError, error } = useFetchProjectsQuery()

  if (isLoading) return <div>Loading...</div>

  return (
    <div className={styles.works}>
      <div className={clsx('container', styles.container)}>
        <TitlePage pageTitle={workTitle} />
        <div className={styles.worksListWrapper}>
          <ul className={styles.worksList}>
            {data?.map(({ id, image_page, image_logo }) => (
              <li key={id} className={clsx(styles.worksListItem, styles.worksListItem_disable)}>
                <Link href={pageUrl.works + id}>
                  <a
                    onMouseEnter={() => dispatch(changeCursor('onEnter'))}
                    onMouseLeave={() => dispatch(changeCursor('default'))}
                    className={styles.worksListItemLink}
                  >
                    <LoadableImage src={image_page} />
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.worksBtnMoreWrapper}>
            <ButtonMore className={[]}>More work</ButtonMore>
          </div>

          <ScrollHint />
        </div>
      </div>
    </div>
  )
}

export default Works
