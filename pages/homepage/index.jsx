import Head from 'next/head';
import { ButtonContact } from '../../components/button';
import Particle from '../../components/particles';
import { H1, P1 } from '../../components/typography';
import styles from './styles.module.scss';
import {motion} from 'framer-motion'
import {animateHomeTitle, homeWordArray1, homeWordArray2} from '../../constants';
import Hamburger from "../../components/hamburger";
import Tooltip from "../../components/tooltip";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hamburger className={styles.hamburger} />
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home__main}>

        <H1 className={[styles.title]}>
          {
            homeWordArray1.map((item, i) => (
              <motion.span
                whileHover={animateHomeTitle}

                key={i}
                className={styles.titleWord}
              >
                {item}
              </motion.span>
            ))
          }
          <br />
          {
            homeWordArray2.map((item, i) => (
              <motion.span whileHover={animateHomeTitle} key={i} className={styles.titleWord}>{item}</motion.span>
            ))
          }
        </H1>
        <P1 className={[styles.paragraph]}>
          I’m Front End developer from Odessa, Ukraine
        </P1>

        <Tooltip content="Yee-haw!">
          <ButtonContact className={[]}>
            Contact me
          </ButtonContact>
        </Tooltip>

      </main>
      <Particle />
    </div>
  )
}

export default Home
