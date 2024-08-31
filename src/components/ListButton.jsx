import React from 'react';

const ListButton = ({ onClick, title }) => {

  return (
    <button onClick={onClick}>
      {title || 'Click Me'} {/* Default title is 'Click Me' if not provided */}
    </button>
  );
};

export default ListButton;
