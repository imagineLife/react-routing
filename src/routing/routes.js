import React, { lazy } from 'react';

const Home = lazy(() => import('../routes/home'));
const WithNav = lazy(() => import('../routes/withNav'));
const Items = lazy(() => import('../routes/items'));
const ItemById = lazy(() => import('../routes/itemById'));
const SpecificItem = lazy(() => import('../routes/itemSpecific'));
const NotFound = lazy(() => import('../routes/notFound'));
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
    nested: true,
    p: '/items',
    e: Items,
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