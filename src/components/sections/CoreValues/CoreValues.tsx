import React from 'react';
import {SectionHeader} from '@/components/UI';
import Bullet from '@/components/common/Bullet/Bullet';

import style from './CoreValues.module.scss';

import bulb from '/img/bulb.svg';

const CoreValues = () => {
  const coreValues = [
    {
      title: 'Innovation',
      text: 'Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.',
    },
    {
      title: 'People',
      text: 'Talent is what enable us to create great companies.',
    },
  ];
  return (
    <section className={style.core_values}>
      <div className={style.core_values__inner_wrapper}>
        <div className={style.core_values__header_wrapper}>
          <SectionHeader>Our core values</SectionHeader>
          <img src={bulb} />
        </div>
        <div className={style.core_values__values_wrapper}>
          {coreValues.map(({title, text}, idx) => (
            <Bullet key={title} title={`0${idx + 1}. ${title}`} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
