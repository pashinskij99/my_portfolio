import React from 'react'
import { H2 } from '../typography'
import styles from './styles.module.scss'
import {animateHomeTitle} from "../../constants";
import {motion} from 'framer-motion';
import Hamburger from '../hamburger';

export const TitlePage = ({pageTitle}) => (
	<div
		className={styles.titlePage}>
		<H2 className={[styles.title]}>
			{pageTitle.map((item, i) => (
				<motion.span
					whileHover={animateHomeTitle}
					key={i}
					className={styles.titleWord}
				>
					{item}
				</motion.span>
			))}
		</H2>
		<hr className={styles.hr}/>
		<Hamburger />
	</div>
)

