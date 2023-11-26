import React from 'react';
import {Navbar} from '@/components/navigation';
import {
  CompanyInfo,
  ContactForm,
  CoreValues,
  Hero,
  HiringCTA,
  OurWorks,
} from '@/components/sections';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <CompanyInfo />
    <CoreValues />
    <OurWorks />
    <HiringCTA />
    <ContactForm />
  </div>
);

export default App;
