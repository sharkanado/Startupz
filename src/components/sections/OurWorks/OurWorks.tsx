import React from 'react';
import {Button, SectionHeader} from '@/components/common';
import {Element} from 'react-scroll';

import style from './OurWorks.module.scss';

import tolq from '/img/tolq.png';
import feedbackLabs from '/img/feedback_labs.png';
import codekeeper from '/img/codekeeper.png';
import legalsite from '/img/legal_site.png';
import thumb from '/img/thumb.png';

const OurWorks = () => {
  const works = [
    {
      name: 'Tolq',
      url: 'https://tolq.com',
      img: tolq,
      color: '#A9BC87',
      description:
        'Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.',
    },
    {
      name: 'FeedbackLabs',
      url: 'https://feedbacklabs.com',
      img: feedbackLabs,
      color: '#8BB5C9',
      description:
        'Feedback Labs turns feedback into actionable insights for your team.',
    },
    {
      name: 'Codekeeper',
      url: 'https://codekeeper.com',
      img: codekeeper,
      color: '#00A0B6',
      description:
        'Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.',
    },
    {
      name: 'LegalSite',
      url: 'https://legalsite.com',
      img: legalsite,
      color: '#8B60D3',
      description:
        'Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.',
    },
  ];

  return (
    <Element name="our-works">
      <section id="our-works" className={style.our_works}>
        <SectionHeader>Our Works</SectionHeader>
        <div className={style.our_works__works_wrapper}>
          {works.map(({name, url, img, description, color}) => (
            <div key={name} className={style.our_works__work}>
              <h3 style={{color: color}}>{name}</h3>
              <p>{description}</p>
              <div style={{flex: 1}} />
              <img src={img} alt={name} />
              <Button onClick={() => window.open(url)}>More</Button>
            </div>
          ))}
        </div>
        <div className={style.our_works__slogan_section}>
          <img
            src={thumb}
            alt="thumb up"
            className={style.our_works__slogan_img}
          />
          <h3>
            Startups create a world that actually is better. Any problem that
            can be solved, will be solved by a startup, and that is a huge
            opportunity.
          </h3>
          <img src={thumb} style={{transform: 'scaleX(-1)'}} alt="thumb up" />
        </div>
      </section>
    </Element>
  );
};

export default OurWorks;
