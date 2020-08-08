import React from 'react';

import KanbanItem from './KanbanItem';

const KanbanList = (props) => {
  const [newItemValue, setNewItemValue] = React.useState('');

  const handleChange = (event) => {
    setNewItemValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.add(newItemValue);
    setNewItemValue('');
  };

  return (
    <div className="kanban-container">
      <div className="header" style={{ backgroundColor: props.background }}>
        {props.title}
      </div>
      {props.items.map((text, i) => (
        <KanbanItem
          key={i}
          index={i}
          text={text}
          delete={() => props.del(i)}
          moveLeft={props.moveLeft ? () => props.moveLeft(i) : null}
          moveRight={props.moveRight ? () => props.moveRight(i) : null}
        />
      ))}
      <form className="input" onSubmit={handleSubmit}>
        <textarea value={newItemValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default KanbanList;