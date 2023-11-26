import React, {useState} from 'react';
import toast from 'react-hot-toast';
import {Button} from '@/components/common';

import style from './ContactForm.module.scss';

import rocket from '/img/rocket.svg';

const ContactForm = () => {
  const [message, setMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSendMessage = () => {
    if (message && name && email) {
      console.log(
        `${name} with email address ${email} sent a message: ${message}`
      );
      //TODO: api call & error handling
      clearState();
      toast.success('Message sent!');
    } else toast.error('Please fill all fields available!');
  };

  const clearState = () => {
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <div className={style.contact_form}>
      <div className={style.contact_form__inner_wrapper}>
        <img src={rocket} />
        <h3>
          Are you ready <br /> to board this rocket ship?
        </h3>
        <p>Share your excitement with us</p>
        <div className={style.contact_form__form}>
          <input
            value={name}
            className={style.contact_form__input}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={style.contact_form__input}
            placeholder="Email"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={style.contact_form__textarea}
            placeholder="Message"
          />
          <div>
            <Button onClick={() => handleSendMessage()} variant="solid-gray">
              Shoot us a message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
