import React from 'react';

function Home() {
  return (
    <main>
      <h1>Home</h1>

      <h3>A Single-Page App that works with several Urls</h3>
      <p>
        Here, A React client-side app focusing on some react-router-dom apis: routing different page
        urls leveraging React as the routing tool. This differs a bit from server-side routing where
        the http server would traditionally be assigned logic per url. Here, on the other hand, the
        server is told to serve the same content at all routes.
      </p>

      <h3>React v18</h3>
      <p>
        React version 18, at the time of writing, leverage a small bit of code as a developer to
        render the app to a dom node. The only html needed to get the ball rolling is a div with an
        id of "root". React "takes over" the rendering from there:
      </p>
      <code style={{ whiteSpace: 'pre' }}>{`import React from 'react';
import RDC from 'react-dom/client';
import AppRouting from './routing'

const ROOT_ELM = 'root'
const FOUND_ELM = document.getElementById(ROOT_ELM)

if (FOUND_ELM) { 
  RDC.createRoot(FOUND_ELM).render(<AppRouting />)
}`}</code>
      <p>
        Here, the react-dom client library "createRoot" method is used in combinlation with the
        "render" method to attach a React component to the dom. The Dom element is the "root" id div
        and the React element is imported from the "routing" file.
      </p>

      <h3>A Single-Purpose Routing Bit of Code</h3>
      <code style={{ whiteSpace: 'pre' }}>{`import React, { lazy, Suspense } from 'react';
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

export default Routing;`}</code>
      <p>
        Here, the routing logic. The "BrowserRouter", "Routes", and "Route" components are pulled
        from the "react-router-dom" library. Per the{' '}
        <a href="https://reactrouter.com/en/main/components/routes" target="none">
          react-router-dom docs
        </a>
        ,{' '}
        <i>
          "Whenever the location changes, {`<Routes>`} looks through all its child routes to find
          the best match and renders that branch of the UI. {`<Route>`} elements may be nested to
          indicate nested UI, which also correspond to nested URL paths. Parent routes render their
          child routes by rendering an {`<Outlet>`}."
        </i>
      </p>
      <p>Each route gets a corresponding {`<Route />`} element. Each route gets 2 props here: a path (<i>the url that corresponds to the route</i>) and the element (<i>the react element that corresponds to each route</i>).</p>
    </main>
  );
}

export default Home;
