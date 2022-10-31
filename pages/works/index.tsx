import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { TitlePage } from '../../components/titlePage'
import { ButtonMore } from '../../components/button'
import { ArrowRight } from '../../components/iconsComponent'
import work_img from '../../assets/images/works/work.jpg'
import styles from './styles.module.scss'

interface IWorksArray {
  id: number
  href: string
  previewImage: string
}

const worksArray : IWorksArray[] = [
  {id: 0, href: '#', previewImage: work_img.src},
  {id: 1, href: '#', previewImage: work_img.src},
  {id: 2, href: '#', previewImage: work_img.src},
  {id: 3, href: '#', previewImage: work_img.src},
  {id: 4, href: '#', previewImage: work_img.src},
  {id: 5, href: '#', previewImage: work_img.src},
]

const Works = () => {
  return (
    <div className={styles.works}>
      <div className={clsx("container", styles.container)}>

        <TitlePage pageTitle='Work' />
        <div className={styles.worksListWrapper}>

          <ul className={styles.worksList}>
            {worksArray.map(({id, href, previewImage}) => (
              <li key={id} className={clsx(styles.worksListItem, styles.worksListItem_disable)}>
                <Link href={href}>
                  <a className={styles.worksListItemLink}>
                    <img src={previewImage} alt="work" />
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.worksBtnMoreWrapper}>
            <ButtonMore className={[]}>
              More work
            </ButtonMore>
          </div>

          <div className={styles.hrScroll}>
            <hr/>
            <button className={styles.btnScrollToTop}>
              <span>S C R O L L</span>
              <ArrowRight className={styles.arrowRight} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Works;