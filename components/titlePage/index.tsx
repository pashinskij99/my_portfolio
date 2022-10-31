import React, { ReactNode } from 'react'
import { H2 } from '../typography'
import styles from './styles.module.scss'
import {Menu} from '../iconsComponent'

interface ITitlePage {
	pageTitle: ReactNode
}

export const TitlePage : React.FC<ITitlePage> = ({pageTitle}) => {
	return (
		<div className={styles.titlePage}>
			<H2 className={[styles.title]}>
				{pageTitle}
			</H2>
			<hr className={styles.hr} />
			<Menu className={styles.hamburger} />
		</div>
	)
}
