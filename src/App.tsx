import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages';
import Hiring from './pages/Hiring';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

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
const App = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {applicationRoutes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default App;
