import React from 'react';

import KanbanList from '../components/KanbanList'

import '../styles/kanban.css';

const kanbanLists = [
  { title: 'To-Do', background: '#35235d' },
  { title: 'Doing', background: '#cb2402' },
  { title: 'Done', background: '#4c49a2' },
  { title: 'Approved', background: '#a31a48' }
];

const Kanban = () => {
  const [items, setItems] = React.useState(
    JSON.parse(window.localStorage.getItem('kanban')) || [[], [], [], []]
  );

  React.useEffect(() => {
    window.localStorage.setItem('kanban', JSON.stringify(items));
  });

  const addItem = (listIndex, text) => {
    const newItems = [...items];
    newItems[listIndex].push(text);
    setItems(newItems);
  };

  const deleteItem = (listIndex, itemIndex) => {
    if (confirm('Delete item?')) {
      const newItems = [...items];
      newItems[listIndex].splice(itemIndex, 1);
      setItems(newItems);
    }
  };

  const moveItem = (fromList, toList, itemIndex) => {
    const newItems = [...items];
    const [item] = newItems[fromList].splice(itemIndex, 1);
    newItems[toList].push(item);
    setItems(newItems);
  };

  return (
    <main className="kanban">
      {kanbanLists.map((list, i) => {
        return (
          <KanbanList
            key={list.title}
            title={list.title}
            background={list.background}
            items={items[i]}
            add={(text) => addItem(i, text)}
            del={(itemIndex) => deleteItem(i, itemIndex)}
            moveLeft={i > 0 ? (itemIndex) => moveItem(i, i - 1, itemIndex) : null}
            moveRight={
              i < kanbanLists.length - 1 ? (itemIndex) => moveItem(i, i + 1, itemIndex) : null
            }
          />
        );
      })}
    </main>
  );
};

export default Kanban;