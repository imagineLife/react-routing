import React, { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

// components
import AppRouting from './routing'
import GlobalLayout from './layouts/global'

// routes
const Home = lazy(() => import('./routes/home'));
const WithNav = lazy(() => import('./routes/withNav'));

function AppRoot() { 
  const routesArr = [
    {
      p: '/',
      e: Home,
      s: 'Starting',
    },
    {
      p: '/with-nav',
      e: WithNav,
      s: 'With A Nav',
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