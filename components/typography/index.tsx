import clsx from 'clsx'
import React, { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ITypography {
	children: ReactNode,
	className: string[]
}

export const H1 : React.FC<ITypography> =  ({children, className}) => {
	return (
		<h1 className={clsx(styles.titleH1, ...className)}>
			{children}
		</h1>
	)
}

export const H2 : React.FC<ITypography> = ({children, className}) => {
	return (
		<h2 className={clsx(styles.titleH2, ...className)}>
			{children}
		</h2>
	)
}

export const H3 : React.FC<ITypography> = ({children, className}) => {
	return (
		<h3 className={clsx(styles.titleH3, ...className)}>
			{children}
		</h3>
	)
}

export const P1 : React.FC<ITypography> = ({children, className}) => {
	return (
		<p className={clsx(styles.paragraphP1, ...className) }>
			{children}
		</p>
	)
}

export const P2 : React.FC<ITypography> = ({children, className}) => {
	return (
		<p className={clsx(styles.paragraphP2, ...className)}>
			{children}
		</p>
	)
}
