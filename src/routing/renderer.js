import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Routing({ routesArr }) {
  return (
    <Routes>
      {routesArr.map((d) => {
        // "flat" routes
        const Elm = d.e;
        if (!d?.nested) {
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

          // "nested" routes
        } else {
          return (
            <Route path={d.p} key={d.s}>
              <Route
                index
                element={
                  <Suspense>
                    <Elm />
                  </Suspense>
                }
              />
              {d.children.map((childRoute) => {
                const ChildRoute = childRoute.e;
                return (
                  <Route
                    path={childRoute.p}
                    element={
                      <Suspense fallback={<span />}>
                        <ChildRoute />
                      </Suspense>
                    }
                    key={childRoute.s}
                  />
                );
              })}
            </Route>
          );
        }
      })}
    </Routes>
  );
}

export default Routing;
