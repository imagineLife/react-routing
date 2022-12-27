import React, { lazy } from 'react';

const Home = lazy(() => import('../routes/home'));
const WithNav = lazy(() => import('../routes/withNav'));
const Items = lazy(() => import('../routes/items'));
const ItemById = lazy(() => import('../routes/itemById'));
const SpecificItem = lazy(() => import('../routes/itemSpecific'));
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
    p: '/items/a-unique-url',
    e: SpecificItem,
    s: 'Specific Item',
  },
];

export default routesArr;