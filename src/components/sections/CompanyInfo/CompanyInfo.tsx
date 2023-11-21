import React from 'react';

import style from './CompanyInfo.module.scss';

import questionMark from '/img/question_mark.svg';
import thumb from '/img/thumb.png';
import problemSolving from '/img/problem_solving.png';
import {SectionHeader} from '@/components/UI';
import Bullet from '@/components/common/Bullet/Bullet';

const CompanyInfo = () => {
  const steps = [
    'We develop innovative products, systems and services',
    'Next we build teams to scale them into companies',
    'Each startup solving one problem at a time',
  ];

  return (
    <section>
      <div className={style.company_info__about}>
        <div className={style.company_info__inner_wrapper}>
          <div>
            <SectionHeader>Who we are?</SectionHeader>
            <p>
              We create products that have innovation and technology at their
              core.
            </p>
            <p>
              We value working with talented people that understand the
              possibilities of today.
            </p>
          </div>
          <img src={questionMark} />
        </div>
        <div className={style.company_info__steps_wrapper}>
          {steps.map((step, idx) => (
            <Bullet key={idx} title={`0${idx + 1}`} text={step} />
          ))}
        </div>
      </div>
      <div className={style.company_info__slogan_section}>
        <div className={style.company_info__slogan}>
          <img src={thumb} className={style.company_info__thumb_img} />
          <h3>We love solving problems!</h3>
          <img
            src={thumb}
            style={{transform: 'scaleX(-1)'}}
            className={style.company_info__thumb_img}
          />
          <img
            className={style.company_info__assistance_img}
            src={problemSolving}
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
