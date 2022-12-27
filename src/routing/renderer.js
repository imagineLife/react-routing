import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const OtherListRoutes = lazy(() => import('./../routes/otherListRoutes')); 

function Routing({ routesArr }) {
  return (
    <Routes>
      {/* 
        routes from params
        NOT separate route directory
       */}
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
          const ParentLayoutElement = d?.layout;
          let parentProps = {
            path: d.p,
            key: d.s,
          };
          if (ParentLayoutElement) {
            parentProps.element = (
              <Suspense fallback={<span />}>
                <ParentLayoutElement />
              </Suspense>
            );
          }
          return (
            <Route {...parentProps}>
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

      {/* 
        A separate route directory here
        HMM! Figure out how even THIS could be passed in...
      */}
      <Route
        path="/others/*"
        element={
          <Suspense fallback={<span />}>
            <OtherListRoutes />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default Routing;
