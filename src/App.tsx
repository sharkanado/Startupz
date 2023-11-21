import React from 'react';
import {Navbar} from '@/components/navigation';
import {CompanyInfo, Hero} from '@/components/sections';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <CompanyInfo />
  </div>
);

export default App;
