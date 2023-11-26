import React from 'react';
import {Navbar, Footer} from '@/components/navigation';
import {
  CompanyInfo,
  ContactForm,
  CoreValues,
  Hero,
  HiringCTA,
  OurWorks,
} from '@/components/sections';

const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <CompanyInfo />
    <CoreValues />
    <OurWorks />
    <HiringCTA />
    <ContactForm />
    <Footer />
  </div>
);

export default Home;
