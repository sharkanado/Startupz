import React from 'react';
import {Button, Input, TextArea} from '@/components/common';

import style from './ContactForm.module.scss';

import rocket from '/img/rocket.svg';

const ContactForm = () => {
  return (
    <div className={style.contact_form}>
      <div className={style.contact_form__inner_wrapper}>
        <img src={rocket} />
        <h3>
          Are you ready <br /> to board this rocket ship?
        </h3>
        <p>Share your excitement with us</p>
        <div className={style.contact_form__form}>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <TextArea placeholder="Message" />
          <div>
            <Button variant="solid-gray">Shoot us a message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
