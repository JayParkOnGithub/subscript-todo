import React from 'react';
const TodoItem = ({ todo, handleChangeProps, deleteTodoProps }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#d35e0f',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { id, completed, title } = todo;

  return (
    <li className='todo-item'>
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
      </label>
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
