import React, { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

// components
import AppRouting from './routing/renderer'
import GlobalLayout from './layouts/global'
import routesArr from './routing/routes';

function AppRoot() { 
  return (
    // BrowserRouter here to wrap 
    // - the nav in the layout
    // - the routes in AppRouting
    <BrowserRouter>
      <GlobalLayout routesArr={routesArr.filter(d => !d.p.includes(':'))}>
        <AppRouting routesArr={routesArr} />
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default AppRoot