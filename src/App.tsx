import React from 'react';
import {Navbar} from '@/components/navigation';
import {CompanyInfo, CoreValues, Hero} from '@/components/sections';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <CompanyInfo />
    <CoreValues />
  </div>
);

export default App;
