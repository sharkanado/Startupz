import React from 'react';

import style from './BulletPoint.module.scss';

const BulletPoint = ({title, text}: {title: string; text: string}) => {
  return (
    <div className={style.bullet}>
      <div className={style.bullet__number}>{title}</div>
      <div className={style.bullet__divider} />
      <p>{text}</p>
    </div>
  );
};

export default BulletPoint;
