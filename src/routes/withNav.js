import React from 'react';

function WithNav() { 
  return (<main id="with-a-nav">
    <h2>Adding A Navigation</h2>
    <p>A Nav gets added to the page & a bunch of "clean code" maintenance gets introduced</p>
    <ul>
      <li>
        <b>Create A "GlobalLayout" component</b> which renders a new nav component and reacts anonymous {`<Children/>`} component
      </li>
      <li>
        <b>Move Routing Logic</b> into an {`<AppRouting />`} component, which is the "children" of the "GlobalLayout" component
      </li>
    </ul>
  </main>)
}

export default WithNav