import React, { useState } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
// import uuid from "uuid";
import { v4 as uuidv4 } from 'uuid';

const TodoContainer = () => {
  const [lists, setLists] = useState([
    {
      id: uuidv4(),
      title: 'Main Tasks',
      todos: [
        {
          // id: uuid.v4(),
          id: uuidv4(),
          title: 'Apply to Subscript',
          completed: true,
        },
        {
          // id: uuid.v4(),
          id: uuidv4(),
          title: 'Complete coding challenge',
          completed: false,
        },
        {
          // id: uuid.v4(),
          id: uuidv4(),
          title: 'Eat pickles',
          completed: false,
        },
      ],
    },
  ]);

  const addList = () => {
    setLists([...lists, { id: uuidv4(), title: 'New List', todos: [] }]);
  };

  const handleChange = (listId, todoId) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              todos: list.todos.map((todo) =>
                todo.id === todoId
                  ? { ...todo, completed: !todo.completed }
                  : todo
              ),
            }
          : list
      )
    );
  };

  const delTodo = (listId, todoId) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              todos: list.todos.filter((todo) => todo.id !== todoId),
            }
          : list
      )
    );
  };

  const addTodoItem = (listId, title) => {
    if (!title) return; // Don't add empty todos
    const newTodo = { id: uuidv4(), title: title, completed: false };
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, todos: [...list.todos, newTodo] } : list
      )
    );
  };

  const handleTitleChange = (listId, newTitle) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, title: newTitle } : list
      )
    );
  };

  return (
    <div className='container'>
      <Header />
      <button className='input-submit' onClick={addList}>
        Add List
      </button>
      {lists.map((list) => (
        <div key={list.id} style={{ minWidth: '300px', margin: '10px' }}>
          <input
            value={list.title}
            style={{ border: 'none' }}
            onChange={(e) => handleTitleChange(list.id, e.target.value)}
          />
          <InputTodo addTodoProps={addTodoItem} listId={list.id} />
          <TodosList
            todos={list.todos}
            handleChangeProps={(todoId) => handleChange(list.id, todoId)}
            deleteTodoProps={(todoId) => delTodo(list.id, todoId)}
          />
        </div>
      ))}
    </div>
  );
};
export default TodoContainer;
