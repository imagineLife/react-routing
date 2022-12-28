import React from 'react';

import { useParams } from 'react-router-dom';
function OtherById() {
  const { otherId } = useParams();
  return (
    <div>
      This is an "other" item-by-id route. The item in focus here is item {otherId}, taken from the
      url via react-router-dom useParams hook.
    </div>
  );
}

export default OtherById;