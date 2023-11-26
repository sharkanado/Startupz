import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import App from './App';
import '@/styles/index.scss';
import '@/styles/fonts.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster toastOptions={{}} />
    </BrowserRouter>
  </React.StrictMode>
);
