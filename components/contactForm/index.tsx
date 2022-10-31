import React from 'react'
import styles from './styles.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form';
import { ButtonContact } from "../button";

type Inputs = {
  example: string,
  exampleRequired: string,
};

const ContactForm = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

      <div className={styles.formGroup}>
        <input name='name' type='text' placeholder='Name'/>
        <input name='email' type='email' placeholder='Email'/>
      </div>

      <textarea
        className={styles.formTextarea}
        name='message'
        placeholder='Message'
        cols={30}
        rows={7}
      ></textarea>

      <ButtonContact className={[styles.formBtnSubmit]}>
        Contact me
      </ButtonContact>

    </form>
  );
};

export default ContactForm;