import React from 'react';
import Sidebar from './../components/sidebar'
function GlobalLayout({ children, routesArr }) {
  return (
    <main id="global-layout">
      <Sidebar routesArr={routesArr} />
      {children}
    </main>
  );
}

export default GlobalLayout;
