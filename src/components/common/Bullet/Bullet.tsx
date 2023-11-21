import React from 'react';

import style from './Bullet.module.scss';

const Bullet = ({title, text}: {title: number; text: string}) => {
  return (
    <div className={style.bullet}>
      <div className={style.bullet__number}>0{title}</div>
      <div className={style.bullet__divider} />
      <p>{text}</p>
    </div>
  );
};

export default Bullet;
