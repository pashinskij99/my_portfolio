import clsx from 'clsx'
import Link from 'next/link'
import { ButtonMore } from '../../components/button'
import { ScrollHint } from '../../components/scrollHint'
import { pageUrl, workTitle } from '../../constants'
import styles from './works.module.scss'
import { useDispatch } from 'react-redux'
import { changeCursor } from '../../store/cursor'
import LoadableImage from '../../components/loadableImage'
import { useFetchProjectsQuery } from '../../store/projects'
import { LoadingWorksIcon } from '../../components/iconsComponent'
import { Header } from '../../components/header'

const Works = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isError, error, isFetching } = useFetchProjectsQuery()

  return (
    <div className={styles.works}>
      <div className={clsx('container', styles.container)}>
        <Header pageTitle={workTitle} />
        <div className={styles.worksListWrapper}>
          {isLoading ? (
            <LoadingWorksIcon />
          ) : (
            <>
              <ul className={styles.worksList}>
                {data?.map(({ id, image_page, image_logo }) => (
                  <li key={id} className={clsx(styles.worksListItem, styles.worksListItem_disable)}>
                    <Link href={pageUrl.works + '/' + id}>
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
            </>
          )}

          <ScrollHint />
        </div>
      </div>
    </div>
  )
}

export default Works
