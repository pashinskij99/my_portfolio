import Head from 'next/head'
import { NextPage } from 'next';
import Particle from '../../components/particles';
import styles from './styles.module.scss'
import {H1, P1} from '../../components/typography'
import { ButtonContact } from '../../components/button';

const wordArray1 = [
  'h','e','l','l','o',',',' ',
  'm','y',' ',
  'n','a','m','e',
]

const wordArray2 = [
  'i', 's',' ',
  'y','a','r','o','s','l','a','v'
]

export const Home : NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home__main}>
        <H1 className={[styles.title]}>
          <span className={styles.titleFirst}>
            {
              wordArray1.map((item, i) => (
                <span key={i} className={styles.titleWord}>{item}</span>
              ))
            }
          </span>
          <br />
          <span className={styles.titleSecond}>
            {
              wordArray2.map((item, i) => (
                <span key={i} className={styles.titleWord}>{item}</span>
              ))
            }
          </span>
          
        </H1>
        <P1 className={[styles.paragraph]}>
          I’m Front End developer from Odessa, Ukraine
        </P1>
        <ButtonContact className={[]}>
          Contact me
        </ButtonContact>
      </main>
      <Particle />
    </div>
  )
}