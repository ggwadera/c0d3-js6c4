import React from 'react';

const KanbanItem = (props) => {
  return (
    <div className="item">
      <div className="arrow left" onClick={() => props.moveLeft()}>
        {props.moveLeft && '<'}
      </div>
      <div className="text" onClick={() => props.delete()}>
        {props.text}
      </div>
      <div className="arrow right" onClick={() => props.moveRight()}>
        {props.moveRight && '>'}
      </div>
    </div>
  );
};

export default KanbanItem;