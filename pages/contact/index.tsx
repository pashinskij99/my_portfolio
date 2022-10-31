import React from 'react'
import styles from './styles.module.scss'
import { TitlePage } from '../../components/titlePage'
import { H3, P2 } from '../../components/typography'
import clsx from 'clsx'
import ContactForm from '../../components/contactForm'
import { NextPage } from 'next'
// import background_svg from '../../assets/images/contact/location.svg';

const Contact : NextPage = () => {
  return (
    <div className={styles.contact}>
      <div className={clsx('container', styles.container)}>

        <TitlePage pageTitle='Contact' />

        {/*<img*/}
        {/*  src={background_svg.src}*/}
        {/*  // width={background_svg.width}*/}
        {/*  // height={background_svg.height}*/}
        {/*  alt=''*/}
        {/*  className={styles.backgroundImg}*/}
        {/*/>*/}

        <div className={styles.contactContainer}>
          <div className={styles.contactInner}>

            <div className={styles.contactHeader}>
              <H3 className={[styles.contactTitle]}>Glad to your suggestions</H3>
              <P2 className={[styles.contactParagraphFirst]}>
                I am interested in permanent work and various
                front-end projects in the form of freelancing
              </P2>
              <P2 className={[styles.contactParagraphSecondary]}>
                <span>You can also contact me at</span>
                <a href='#'>Telegram</a>
                <a href='#'>Linkedin</a>
              </P2>
            </div>

            <ContactForm />

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;