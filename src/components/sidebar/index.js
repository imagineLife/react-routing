import React from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';

// a sidebar example INCLUDING nested routes (not-yet-implemented here)
// https://codepen.io/andreaamado/pen/ExbvEmP
function Sidebar({ routesArr }) {
  return (
    <nav aria-label="Main Navigation">
      <ul>
        {routesArr.map((r) => (
          <li className="item" key={r.s} aria-expanded="false">
            <Link to={r.p}>{r.s}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
