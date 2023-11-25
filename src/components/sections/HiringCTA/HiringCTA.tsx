import React from 'react';
import {Button, SectionHeader} from '@/components/common';

import style from './HiringCTA.module.scss';

import hiring_left from '/img/hiring_left.png';
import hiring_right from '/img/hiring_right.png';

const HiringCTA = () => {
  return (
    <div className={style.hiring_cta}>
      <img src={hiring_left} className={style.hiring_cta__img_left} />
      <img src={hiring_right} className={style.hiring_cta__img_right} />
      <SectionHeader>We are hiring!</SectionHeader>
      <p>
        We're always looking for talented people to join and help build our
        startups.
        <br /> Check out our current openings
      </p>
      <div>
        <Button variant="solid-blue">See Current Openings</Button>
      </div>
    </div>
  );
};

export default HiringCTA;
