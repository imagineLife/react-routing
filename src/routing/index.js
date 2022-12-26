import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Routing({routesArr}) {
  return (
      <Routes>
        {routesArr.map((d) => {
          const Elm = d.e;
          return (
            <Route
              path={d.p}
              element={
                <Suspense fallback={<span />}>
                  <Elm />
                </Suspense>
              }
              key={d.s}
            />
          );
        })}
      </Routes>
  );
}

export default Routing;