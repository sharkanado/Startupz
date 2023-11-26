import React from 'react';
import {Element} from 'react-scroll';
import {IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io5';

import style from './Footer.module.scss';

import startupzLogo from '/img/startupz_logo.svg';

const Footer = () => {
  const companies = [
    {name: 'Tolq', url: 'https://tolq.com'},
    {name: 'LegalSite', url: 'https://legalsite.com'},
    {name: 'Codekeeper', url: 'https://codekeeper.com'},
    {name: 'Feedback Labs', url: 'https://feedbacklabs.com'},
  ];

  const socials = [
    {icon: <IoLogoTwitter size={20} />, url: 'https://twitter.com'},
    {icon: <IoLogoLinkedin size={20} />, url: 'https://linkedin.com'},
    {icon: <IoLogoInstagram size={20} />, url: 'https://instagram.com'},
  ];

  return (
    <Element name="footer">
      <footer id="footer" className={style.footer}>
        <div className={style.footer__section}>
          <img src={startupzLogo} alt="logo" />
          <p>
            © 2020 Startupz. <br />
            All rights reserved.
          </p>
        </div>
        <div style={{flex: 1}} />

        <div className={style.footer__section}>
          <h4>Companies</h4>
          <div className={style.footer__section__content}>
            {companies.map(({name, url}) => (
              <a href={url} target="blank" key={name}>
                {name}
              </a>
            ))}
          </div>
        </div>
        <div className={style.footer__section}>
          <h4>Contact</h4>
          <p>
            World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM
            The Hague The Netherlands
          </p>
          <a href="mailto:startupz@email.com">Send us an email</a>
        </div>

        <div className={style.footer__section_socials}>
          <h4>Follow us</h4>
          <div className={style.footer__section__content}>
            {socials.map(({url, icon}, idx) => (
              <a href={url} target="blank" key={idx}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
