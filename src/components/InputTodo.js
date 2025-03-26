import React, { useState } from 'react';

const InputTodo = ({ addTodoProps, listId }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoProps(listId, title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        type='text'
        className='input-text'
        placeholder='Add todo...'
        value={title}
        name='title'
        onChange={handleChange}
      />
      <input type='submit' className='input-submit' value='Submit' />
    </form>
  );
};
export default InputTodo;
