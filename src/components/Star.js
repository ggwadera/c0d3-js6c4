import React from 'react';

const Star = (props) => {
  return (
    <i
      className={props.selected ? 'fas fa-star' : 'far fa-star'}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
    ></i>
  );
};

export default Star;