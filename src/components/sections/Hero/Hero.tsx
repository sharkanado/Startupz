import React from 'react';
import Button from '../../common/Button/Button';

import style from './Hero.module.scss';

import heroImage from '/img/hero_image.png';

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.hero__inner_wrapper}>
        <h1>
          We Create <br /> Startups.
        </h1>
        <p>We are startup studio that develops and launches new companies.</p>
        <Button variant="solid-blue">See our works</Button>
      </div>
      <img src={heroImage} />
    </section>
  );
};

export default Hero;
