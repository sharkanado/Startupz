import React from 'react';
import {Navbar} from '@/components/navigation';
import {CompanyInfo, CoreValues, Hero, OurWorks} from '@/components/sections';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <CompanyInfo />
    <CoreValues />
    <OurWorks />
  </div>
);

export default App;
