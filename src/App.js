import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useRoutes } from './routes';
import Nav from './components/Nav';

export default function App() {
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        {routes}
      </div>
    </BrowserRouter>
  );
}
