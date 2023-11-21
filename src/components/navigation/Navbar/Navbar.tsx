import React from 'react';
import {Button} from '@/components/UI';

import style from './Navbar.module.scss';

import startupzLogo from '/img/startupz_logo.svg';

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img src={startupzLogo} />
      <div className={style.navbar__links_wrapper}>
        <a href="#our-works">Startups</a>
        <a href="#contact">Contact</a>
        <div>
          <Button variant="outlined">Work with us!</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;