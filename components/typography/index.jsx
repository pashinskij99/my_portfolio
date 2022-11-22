import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'

export const H1 =  ({children, className}) => {
	return (
		<h1 className={clsx(styles.titleH1, ...className)}>
			{children}
		</h1>
	)
}

export const H2 = ({children, className}) => {
	return (
		<h2 className={clsx(styles.titleH2, ...className)}>
			{children}
		</h2>
	)
}

export const H3 = ({children, className}) => {
	return (
		<h3 className={clsx(styles.titleH3, ...className)}>
			{children}
		</h3>
	)
}

export const P1 = ({children, className}) => {
	return (
		<p className={clsx(styles.paragraphP1, ...className) }>
			{children}
		</p>
	)
}

export const P2 = ({children, className}) => {
	return (
		<p className={clsx(styles.paragraphP2, ...className)}>
			{children}
		</p>
	)
}
