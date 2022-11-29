import clsx from 'clsx'
import Head from 'next/head'
import React, { useState } from 'react'
import image from '../../assets/images/about/photo-1.jpg'
import { ButtonResume } from '../../components/button'
import { H2, H3, P2 } from '../../components/typography'
import styles from './styles.module.scss'
import { aboutMeTitle } from '../../constants'
import { Header } from '../../components/header'
import RainComponent from '../../components/rainComponent'

const About = () => {
  return (
    <div className={styles.about}>
      <Head>
        <title>About me</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={clsx('container', styles.container)}>
          <Header pageTitle={aboutMeTitle} />
          <RainComponent />
          <div className={styles.content}>
            <div className={styles.aboutMeDescription}>
              <H2 className={[styles.title]}>About me</H2>
              <P2 className={styles.paragraph} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Odio facilisis mauris sit amet. Amet tellus cras adipiscing enim eu turpis egestas.
                Sapien et ligula ullamcorper malesuada proin libero nunc consequat. In hac habitasse platea dictumst
                quisque sagittis purus. Id diam vel quam elementum pulvinar. Cursus mattis molestie a iaculis at. Amet
                dictum sit amet justo donec enim diam vulputate ut. Augue ut lectus arcu bibendum at. Sit amet tellus
                cras adipiscing enim. Maecenas pharetra convallis posuere morbi leo urna. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
                facilisis mauris sit amet. Amet tellus cras adipiscing enim eu turpis egestas. Sapien et ligula
                ullamcorper malesuada proin libero nunc consequat. In hac habitasse platea dictumst quisque sagittis
                purus. Id diam vel quam elementum pulvinar. Cursus mattis molestie a iaculis at. Amet dictum sit amet
                justo donec enim diam vulputate ut. Augue ut lectus arcu bibendum at. Sit amet tellus cras adipiscing
                enim. Maecenas pharetra convallis posuere morbi leo urna. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis
                mauris sit amet. Amet tellus cras adipiscing enim eu turpis egestas. Sapien et ligula ullamcorper
                malesuada proin libero nunc consequat. In hac habitasse platea dictumst quisque sagittis purus. Id diam
                vel quam elementum pulvinar. Cursus mattis molestie a iaculis at. Amet dictum sit amet justo donec enim
                diam vulputate ut. Augue ut lectus arcu bibendum at. Sit amet tellus cras adipiscing enim. Maecenas
                pharetra convallis posuere morbi leo urna.
              </P2>
            </div>

            <div className={styles.aboutMeGallery}></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
