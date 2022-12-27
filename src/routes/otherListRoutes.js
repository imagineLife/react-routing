import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import OtherList from './other/list'
import OtherById from './other/byId';

function OtherItemNewRoute() {
  return (
    <div>
      This is a UNIQUE other item, not with the url param from react-router-dom.
    </div>
  );
}

function OtherListRoutes() {
  return (
    <Routes>
      <Route index element={<OtherList />} />
      <Route path=":otherId" element={<OtherById />} />
      <Route path="otherNew" element={<OtherItemNewRoute />} />
    </Routes>
  );
}

export default OtherListRoutes;