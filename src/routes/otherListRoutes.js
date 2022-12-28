import React, { Suspense, lazy } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import OtherList from './other/list'
const OtherById = lazy(() => import('./other/byId'));

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
      <Route
        path=":otherId"
        element={
          <Suspense fallback={<span />}>
            <OtherById />
          </Suspense>
        }
      />
      <Route path="otherNew" element={<OtherItemNewRoute />} />
    </Routes>
  );
}

export default OtherListRoutes;