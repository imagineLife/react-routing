import React from 'react'

function NotFound() { 
  return (
    <main>
      <h1>NotFound</h1>
      <p>there is nothing at this url. Try one of the working urls!</p>
      <p>React-router-dom offers a "catch-all" route handler:</p>
      <code style={{ whiteSpace: 'pre' }}>{`<Route path="*" element={<NotFoundRoute />}`}</code>
    </main>
  );
}

export default NotFound