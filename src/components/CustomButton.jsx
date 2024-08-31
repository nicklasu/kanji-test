import React from 'react';

const CustomButton = ({ color, onClick, title }) => {
  const buttonStyle = {
    backgroundColor: color || 'blue', // Default color is blue if not provided
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '10px',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {title || 'Click Me'} {/* Default title is 'Click Me' if not provided */}
    </button>
  );
};

export default CustomButton;
