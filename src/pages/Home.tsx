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
import Footer from '@/components/navigation/Footer/Footer';

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
