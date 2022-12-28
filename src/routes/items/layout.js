import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

function ItemLayout() {
  return (
    <Fragment>
      <aside>This Is A Layout for the item & item children routes.</aside>
      <Outlet />
    </Fragment>
  );
}

export default ItemLayout;
