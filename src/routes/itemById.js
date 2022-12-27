import React from 'react';
import { useParams } from 'react-router-dom';

function ItemById() { 
  const { itemId } = useParams()

  return (
    <div>
      <h2>Item By Id Page</h2>
      <p>
        The item number comes from{' '}
        <code style={{ writeSpace: 'pre' }}>{`const { itemId } = useParams()`}</code> functionality
        provided by react-router-dom.
      </p>
      <p>
        This leverages the url parameter feature in react-router-dom: the{' '}
        <code style={{ whiteSpace: 'pre' }}>{'const { itemId } = useParams()'}</code> detail, where
        "useParams" can return url params for use in the route. Here, I use the param to show the
        item id in the page.
      </p>
      <p>The "useParams" hook here gets the item id from the url as {itemId }. The unique detail about this "itemId" param is that this webpage, itself, does not have <b>any unique content</b>, other than the value of that itemId. React-route-dom does the "work" of pulling the itemId from the url.</p>
    </div>
  );
}

export default ItemById