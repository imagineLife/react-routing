import React from 'react';
import { Link } from 'react-router-dom';

function Item({ d }) {
  const itemByIdRoute = `/items/${d.id}`
  return (
    <li>
      <Link to={itemByIdRoute}>{d.name}</Link>
    </li>
  );
}
function Items() { 
  const items = [
    {
      id: 123,
      name: 'a first item',
    },
    {
      id: 234,
      name: 'a second item',
    },
    {
      id: 345,
      name: 'a third item',
    },
  ];
  return (
    <>
      <h2>Items</h2>
      <p>A handful of items.</p>

      <h3>2 New Routes: A List route and a "by-id" route</h3>
      <h4>The List Route</h4>
      <p>
        The First route to add is the "list" route. This route shows a list of items. Each item has
        text to display about the item as well as an item "id" - hopefully a reasonably regular task
        to do in a SaaS product.
      </p>
      <p>
        Each item in the list route is also a link to another url: the{' '}
        <code style={{ whiteSpace: 'pre' }}>{'/items/:itemId'}</code> route. OnClick of each item
        the browser redirects to that url with the item id as the url param: item id 123 will
        navigate to <code style={{ whiteSpace: 'pre' }}>{'/items/123'}</code>.
      </p>

      <h4>The Item-by-id Route</h4>
      <p>The second route here is particular to a specific item, where the item.</p>
      <p>
        This leverages the url parameter feature in react-router-dom: the{' '}
        <code style={{ whiteSpace: 'pre' }}>{'const { itemId } = useParams()'}</code> detail, where "useParams" can return url params for use in the route. Here, I use the param to show the item id in the page. 
      </p>

      <ul>
        {items.map((d) => (
          <Item key={d.name} d={d} />
        ))}
      </ul>
    </>
  );
}

export default Items