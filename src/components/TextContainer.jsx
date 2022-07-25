import React from 'react';
import './Components.css';

const textContainer = ({ setText, todoList, setTodoList, text }) => {
  // Inputed text handler
  const inputTextHandler = (e) => {
    setText(e.target.value);
  };

  // Submitted Input Handler
  const submitedTodoHandler = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { text: text, completed: false, id: Math.random() * 2 },
    ]);
    setText('');
  };

  return (
    <div>
      <input
        value={text}
        type="text"
        name="todo"
        id="TodoText"
        onChange={inputTextHandler}
      />
      <button onClick={submitedTodoHandler} id="plus-style">
        Add
      </button>
    </div>
  );
};

export default textContainer;
