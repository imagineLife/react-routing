import React, { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
<BrowserRouter></BrowserRouter>;
import AppRouting from './routing'
import GlobalLayout from './layouts/global'
const Home = lazy(() => import('./routes/home'));
const AnotherRoute = lazy(() => import('./routes/second'));

function AppRoot() { 
  const routesArr = [
    {
      p: '/',
      e: Home,
      s: 'home',
    },
    {
      p: '/second',
      e: AnotherRoute,
      s: 'second-route',
    },
  ];  
  return (
    // BrowserRouter here to wrap 
    // - the nav in the layout
    // - the routes in AppRouting
    <BrowserRouter>
      <GlobalLayout routesArr={routesArr}>
        <AppRouting routesArr={routesArr} />
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default AppRoot