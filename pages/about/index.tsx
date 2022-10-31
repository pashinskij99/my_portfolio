import Head from 'next/head'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'
import { H3, P2 } from '../../components/typography'
import { NextPage } from 'next/types'
import { TitlePage } from '../../components/titlePage'
import { ButtonResume } from '../../components/button'
import image from '../../assets/images/about/photo-1.jpg'

const tabsName = ['Me', 'Study', 'Experience', 'Hobby']

const tabsContent = [
	{
		id: 'Me',
		title: 'Hello, I’m Yaroslav Pashinskii',
		description: 'I am a front-end developer from Odessa (Ukraine) I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
	},
	{
		id: 'Study',
		title: 'I’m for self-education',
		description: 'I raise my level and skills through various courses and through self-education. I work on it every day! At the moment I know very well such languages and technologies as HTML, CSS, JavaScript, React'
	},
	{
		id: 'Experience',
		title: 'For soul',
		description: 'Since childhood, my favorite hobbies are sports and football. I love it as a life. Now along with them programming'
	},
	{
		id: 'Hobby',
		title: 'I work om it every day!',
		description: 'I started front-end development about 1 year ago (2020) and am gaining experience by performing a large number of pet projects. I also have little experience in commercial projects. My skills grow with daily work !'
	},
]

const About : NextPage = () => {
	const [ tabActive, setTabActive ] = useState(tabsName[0])

	// const handleTabClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
	const handleTabClick = (event: any): void => {
		setTabActive(event.target.textContent)
	}

  return (
    <div className="about">
      <Head>
        <title>About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.about__main}>
				<div className={clsx("container", styles.container)}>

					<TitlePage pageTitle="About me" />

					<div className={styles.about__content}>
						<div className={clsx(styles.about__carouselInfo, styles.carouselInfo)}>
							<div className={styles.carouselInfo__tabs}>
								<ul className={styles.carouselInfo__tabsList}>
									{
										tabsName.map(item => (
											<li key={item} className={styles.carouselInfo__tabsItem}>
												<button onClick={handleTabClick}>{item}</button>
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
								{tabsContent.map(({title, description, id}) => (
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