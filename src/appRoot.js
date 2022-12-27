import React, { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

// components
import AppRouting from './routing'
import GlobalLayout from './layouts/global'

// routes
// NOTE: the routes "state" could be moved into a useRoutes "hook"
const Home = lazy(() => import('./routes/home'));
const WithNav = lazy(() => import('./routes/withNav'));
const Items = lazy(() => import('./routes/items'));
const ItemById = lazy(() => import('./routes/itemById'));
const SpecificItem = lazy(() => import('./routes/itemSpecific'));

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
    {
      p: '/items',
      e: Items,
      s: 'Items',
    },
    {
      // NOTE: itemId matches the useParams param in the ItemById component
      p: '/items/:itemId',
      e: ItemById,
      s: 'Item By Id',
    },
    {
      // NOTE: itemId matches the useParams param in the ItemById component
      p: '/items/a-unique-url',
      e: SpecificItem,
      s: 'Specific Item',
    },
  ];  
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