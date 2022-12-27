import React from 'react';
import { Link } from 'react-router-dom';

function Item({ d }) {
  const itemByIdRoute = `/items/${d.id}`
  return (
    <li>
      <Link to={itemByIdRoute}>{d.name}</Link>
    </li>
  );
}
function Items() { 
  const items = [
    {
      id: 123,
      name: 'a first item',
    },
    {
      id: 234,
      name: 'a second item',
    },
    {
      id: 345,
      name: 'a third item',
    },
  ];
  return (
    <>
      <h2>Items</h2>
      <p>A handful of items.</p>
      <ul>
        {items.map(d => <Item key={d.name} d={d} />)}
      </ul>
    </>
  );
}

export default Items