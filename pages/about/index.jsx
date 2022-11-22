import clsx from 'clsx'
import {motion} from 'framer-motion'
import Head from 'next/head'
import React, {useState} from 'react'
import image from '../../assets/images/about/photo-1.jpg'
import {ButtonResume} from '../../components/button'
import {TitlePage} from '../../components/titlePage'
import {H3, P2} from '../../components/typography'
import styles from './styles.module.scss'
import {aboutMeTitle, aboutTabsContent, aboutTabsName} from '../../constants'
import {useDispatch} from 'react-redux'
import {changeCursor} from '../../store/cursor'

const About = () => {
  const [tabActive, setTabActive] = useState(aboutTabsName[0])

  const dispatch = useDispatch()

  const handleTabClick = (event) => {
    setTabActive(event.target.textContent)
  }

  return (
    <div className="about">
      <Head>
        <title>About me</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.about__main}>
        <div className={clsx("container", styles.container)}>

          <TitlePage pageTitle={aboutMeTitle} />

          <div className={styles.about__content}>
            <div className={clsx(styles.about__carouselInfo, styles.carouselInfo)}>
              <div className={styles.carouselInfo__tabs}>
                <ul className={styles.carouselInfo__tabsList}>
                  {
                    aboutTabsName.map(item => (
                      <li key={item} className={styles.carouselInfo__tabsItem}>
                        <button
                          onMouseEnter={() => dispatch(changeCursor('onEnter'))}
                          onMouseLeave={() => dispatch(changeCursor('default'))}
                          onClick={handleTabClick}
                        >
                          {item}
                        </button>
                        {tabActive === item && (
                          <motion.span
                            layoutId="rect"
                            transition={{
                              duration: 0.5,
                              delay: 0.1
                            }}
                          ></motion.span>
                        )}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className={styles.carouselInfo__tabsContent}>
                {aboutTabsContent.map(({title, description, id}) => (
                  <li key={id} className={
                    clsx(styles.carouselInfo__tabsContentItem, tabActive === id && styles.carouselInfo__tabsContentItem_active)
                  }>
                    <H3 className={[styles.titleH3]}>{title}</H3>
                    <P2 className={[styles.paragraph_first]}>{description}</P2>
                    <ButtonResume className={[]}>
                      Download resume
                    </ButtonResume>
                  </li>
                ))}
              </div>
            </div>
            <div className={styles.aboutPhoto}>
              <img
                className={styles.aboutPhotoImg}
                src={image.src}
                alt=""
              />
              <div className={styles.aboutPhotoBackgroundImages}>
                <img src={image.src} alt=""/>
                <img src={image.src} alt=""/>
              </div>
            </div>
            {/* <div className={clsx(styles.about__carouselPhoto, styles.carouselPhoto)}>
						<Carousel />
					</div> */}
          </div>

        </div>
      </main>
    </div>
  )
}

export default About
