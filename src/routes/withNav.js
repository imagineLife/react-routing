import React from 'react';

function WithNav() {
  return (
    <main id="with-a-nav">
      <h2>Adding A Navigation</h2>
      <p>A Nav gets added to the page & a bunch of "clean code" maintenance gets introduced.</p>

      <h3>Re-Organize some code</h3>
      <ul>
        <li>
          <b>Create A "GlobalLayout" component</b> which renders a new nav component and reacts
          anonymous {`<Children/>`} component
        </li>
        <li>
          <b>Move Routing Logic</b> into an {`<AppRouting />`} component, which is the only "child"
          of the "GlobalLayout" component.
        </li>
      </ul>

      <h3>Build & Pass Routes Around</h3>
      <ul>
        <li>
          <b>Build</b> a "routes" array at the app's "root" level. Each rout gets 3 things (
          <i>an object</i>): the route path, the route react component (<i>lazy loaded</i>), and a
          "friendly" name of the route.
        </li>
        <li>
          <b>Pass</b> the routes array to the GlobalLayout and the AppRouting child. The
          GlobalLayout uses the routes and passes the routes to the Sidebar component. The
          AppRouting registers each rout with react-router-dom as a {'<Route />'}.
        </li>
      </ul>

      <h3>Build the Sidebar Component</h3>
      <ul>
        <li>
          <b>Create</b> the component. Here, the nav is a {"<nav>"} component with an unordered list. Each route gets a list item
        </li>
      </ul>
    </main>
  );
}

export default WithNav;
