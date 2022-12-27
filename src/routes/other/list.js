import React from 'react';
import { Link } from 'react-router-dom';

function OtherItem({ d }) {
  const itemByIdRoute = `/others/${d.id}`;
  return (
    <li>
      <Link to={itemByIdRoute}>{d.name}</Link>
    </li>
  );
}

function OtherList() {
  const items = [
    {
      id: 987,
      name: 'a first OTHER item',
    },
    {
      id: 876,
      name: 'a second OTHER item',
    },
    {
      id: 654,
      name: 'a third OTHER item',
    },
    {
      id: 'otherNew',
      name: 'a specific OTHER item!',
    },
  ];

  return (
    <div>
      <h2>an "Other" List</h2>
      <ul>
        {items.map((d) => (
          <OtherItem key={d.name} d={d} />
        ))}
      </ul>
    </div>
  );
}

export default OtherList