import React from 'react';

import style from './CompanyInfo.module.scss';

import questionMark from '/img/question_mark.svg';

const CompanyInfo = () => {
  const steps = [
    'We develop innovative products, systems and services',
    'Next we build teams to scale them into companies',
    'Each startup solving one problem at a time',
  ];

  return (
    <section className={style.company_info}>
      <div className={style.company_info__inner_wrapper}>
        <div>
          <div>
            <h2>Who we are?</h2>
            <p>
              We create products that have innovation and technology at their
              core.
            </p>
            <p>
              We value working with talented people that understand the
              possibilities of today.
            </p>
          </div>
        </div>
        <img src={questionMark} />
      </div>
      <div className={style.company_info__steps_wrapper}>
        {steps.map((step, idx) => (
          <Step key={idx} id={idx + 1} text={step} />
        ))}
      </div>
    </section>
  );
};

export default CompanyInfo;

const Step = ({id, text}: {id: number; text: string}) => {
  return (
    <div className={style.company_info__step}>
      <div className={style.company_info__step_number}>0{id}</div>
      <div className={style.company_info__step_divider} />
      <p>{text}</p>
    </div>
  );
};
