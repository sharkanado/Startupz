import React from 'react';

import style from './Navbar.module.scss';

import startupzLogo from '/img/startupz_logo.svg';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <img src={startupzLogo} />
      <div className={style.navbar__nav_wrapper}>
        <a href="">Startups</a>
        <a href="">Contact</a>
        <div>
          <button className={style.navbar__button}>Work with us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
