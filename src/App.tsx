import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages';
import Hiring from './pages/Hiring';

const applicationRoutes = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
  },
  {
    name: 'Hiring',
    path: '/hiring',
    component: <Hiring />,
  },
];
const App = () => (
  <Routes>
    {applicationRoutes.map((route, idx) => (
      <Route key={idx} path={route.path} element={route.component} />
    ))}
  </Routes>
);

export default App;
