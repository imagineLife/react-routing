import React from 'react';
import { useParams } from 'react-router-dom';

function ItemById() { 
  const { itemId } = useParams()

  return (
    <div>
      <h2>Item By Id Page</h2>
      <p>This is for item id {itemId}.</p>
      <p>The item number comes from <code style={{ writeSpace: "pre" }}>{`const { itemId } = useParams()`}</code> functionality provided by react-router-dom.</p>
    </div>
  )
}

export default ItemById