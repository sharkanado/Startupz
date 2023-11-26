import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages';

const applicationRoutes = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
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
