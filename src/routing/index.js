import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./../routes/home'));

const routesArr = [
  {
    p: '/',
    e: Home,
    s: 'home'
  }
]

function Routing() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default Routing;