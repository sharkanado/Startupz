import React from 'react';

import style from './Hero.module.scss';

import heroImage from '/img/hero_image.png';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className={style.hero}>
      <h1>
        We Create <br /> Startups.
      </h1>
      <p>We are startup studio that develops and launches new companies.</p>
      <Button variant="solid-blue">See our works</Button>
      <img src={heroImage} />
    </section>
  );
};

export default Hero;
