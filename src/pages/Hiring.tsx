import React from 'react';
import {Navbar, Footer} from '@/components/navigation';

const Hiring = () => (
  <div>
    <Navbar />
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Hiring info
    </div>

    <Footer />
  </div>
);

export default Hiring;
