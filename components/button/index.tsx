import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { ArrowRight } from '../iconsComponent'
import styles from './styles.module.scss'

interface IButton {
	children: ReactNode,
	onClick?: React.FC,
	className: string[]
}

export const ButtonContact : React.FC<IButton> = ({children, onClick, className}) => {
	return (
		<button onClick={onClick} className={clsx(styles.btnContact, ...className)}>
			<span className={styles.btnContact__text}>{children}</span>
			<ArrowRight className={styles.btnContact__icon} />
		</button>
	)
}

export const ButtonResume : React.FC<IButton> = ({children, onClick}) => {
	return (
		<button onClick={onClick} className={styles.btnResume}>
			{children}
		</button>
	)
}

export const ButtonMore : React.FC<IButton> = ({children, onClick, className}) => {
	return (
		<button onClick={onClick} className={clsx(styles.btnMore, ...className)}>
			{children}
		</button>
	)
}
