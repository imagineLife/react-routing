import React, { lazy } from 'react';

const Home = lazy(() => import('../routes/home'));
const WithNav = lazy(() => import('../routes/withNav'));

// items routes
const Items = lazy(() => import('../routes/items/items'));
const ItemLayout = lazy(() => import('../routes/items/layout'));
const ItemById = lazy(() => import('../routes/items/byId'));
const SpecificItem = lazy(() => import('../routes/items/specific'));
const NotFound = lazy(() => import('../routes/notFound'));

// THIS is a separate route "library"
// which gets rendered a little differently than the rest above
const OtherListRoutes = lazy(() => import('./../routes/otherListRoutes')); 

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
  /*
    A route with "sub" routes
    lsited in the "children" key array list
  */ 
  {
    nested: true,
    p: '/items',
    e: Items,
    layout: ItemLayout,
    s: 'Items',
    children: [
      {
        // NOTE: itemId matches the useParams param in the ItemById component
        p: ':itemId',
        e: ItemById,
        s: 'Item By Id',
      },
      {
        p: 'a-unique-url',
        e: SpecificItem,
        s: 'Specific Item',
      },
    ],
  },
  {
    p: '*',
    e: NotFound,
    s: 'NotFound',
  },
];

export default routesArr;


/*
  Before Route Nesting
  - 3 routes: items, items/:itemId, and items/a-unique-url
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
    p: '/items/a-unique-url',
    e: SpecificItem,
    s: 'Specific Item',
  },
*/ 