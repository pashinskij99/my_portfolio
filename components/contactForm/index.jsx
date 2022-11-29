import React from 'react'
import { useForm } from 'react-hook-form'
import { ButtonContact } from '../button'
import styles from './styles.module.scss'

const ContactForm = () => {
  const { handleSubmit } = useForm()
  const onSubmit = (data) => {}

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <input name='name' type='text' placeholder='Name' />
        <input name='email' type='email' placeholder='Email' />
      </div>

      <textarea className={styles.formTextarea} name='message' placeholder='Message' cols={30} rows={7} />

      <ButtonContact className={[styles.formBtnSubmit]}>Contact me</ButtonContact>
    </form>
  )
}

export default ContactForm
