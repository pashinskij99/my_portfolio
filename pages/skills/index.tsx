import { NextPage } from 'next'
import React from 'react'
import { TitlePage } from '../../components/titlePage'
import styles from './styles.module.scss'
import my_photo from '../../assets/images/about/photo-1.jpg'
import clsx from 'clsx'
import { H3 } from '../../components/typography'

interface ISkillsArray {
	id: number
	name: string
	percent: number
}

interface ISkillsFavoriteArray {
	id: number
	name: string
	description: string
}

const skillsArray: ISkillsArray[] = [
	{ id: 0, name: 'HTML', percent: 100 },
	{ id: 1, name: 'CSS', percent: 100 },
	{ id: 2, name: 'JavaScript ', percent: 90 },
	{ id: 3, name: 'React', percent: 100 },
]

const skillsFavoriteArray: ISkillsFavoriteArray[] = [
	{
		id: 0,
		name: 'HTML',
		description: 'Знание языка на наивысшем уровне-90%'
	},
	{
		id: 1,
		name: 'CSS',
		description: 'Знание языка на наивысшем уровне-90%'
	},
	{
		id: 2,
		name: 'javascript',
		description: 'Знание языка на наивысшем уровне-90%'
	},
	{
		id: 3,
		name: 'react',
		description: 'Знание языка на наивысшем уровне-90%'
	},
]

const Skills: NextPage = () => {
	return (
		<div className={styles.skills}>
			<div className={clsx('container', styles.container)}>
				<TitlePage pageTitle='My skills' />

				<div className={styles.skillsMain}>

					<ul className={styles.skillsFavorite}>
						{
							skillsFavoriteArray.map(({ id, name, description }) => (
								<li key={id} className={styles.skillsFavoriteItem}>
									<H3 className={[styles.skillsFavoriteItemTitle]}>{name}</H3>
									<p className={styles.skillsFavoriteItemDescription}>{description}</p>
								</li>
							))
						}
					</ul>

					<article className={styles.skillsWrapper}>
						<img src={my_photo.src} alt="Me" />
						<ul className={styles.skillsList}>
							{skillsArray.map(({ id, name, percent }) => (
								<li key={id} className={styles.skillsListItem}>
									<label className={styles.skillsName} htmlFor="file">{name}</label>
									<progress className={styles.skillsProgress} id="file" max="100" value={percent}> 70% </progress>
									<span className={
										clsx(
											styles.skillsProgressPercent,
											percent <= 90 && styles.skillsProgressPercent_less
										)}
									>{percent}%</span>
								</li>
							))}
						</ul>
					</article>

				</div>

			</div>
		</div>
	)
}

export default Skills
