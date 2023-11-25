import React from 'react';
import {Button} from '@/components/UI';
import {useWindowSize} from 'react-use';
import {IoMenu} from 'react-icons/io5';

import style from './Navbar.module.scss';

import startupzLogo from '/img/startupz_logo.svg';

const Navbar = () => {
  const {width} = useWindowSize();
  return width > 768 ? (
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
  ) : (
    <div className={style.navbar}>
      <img height="30px" src={startupzLogo} />
      <div>
        <button className={style.navbar__mobile_menu_control}>
          <IoMenu size="30" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
