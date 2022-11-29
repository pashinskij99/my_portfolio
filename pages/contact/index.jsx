import clsx from 'clsx'
import React from 'react'
import ContactForm from '../../components/contactForm'
import { Header } from '../../components/header'
import { H3, P2 } from '../../components/typography'
import { contactMeTitle } from '../../constants'
import styles from './styles.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={clsx('container', styles.container)}>
        <Header pageTitle={contactMeTitle} />
        <div className={styles.contactContainer}>
          <div className={styles.contactInner}>
            <div className={styles.contactHeader}>
              <H3 className={[styles.contactTitle]}>Glad to your suggestions</H3>
              <P2 className={[styles.contactParagraphFirst]}>
                I am interested in permanent work and various front-end projects in the form of freelancing
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
  )
}

export default Contact
