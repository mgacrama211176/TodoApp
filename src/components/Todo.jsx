import React from 'react';
import Delete from './Delete';
import Complete from './Complete';
import './Components.css';

const Todo = ({ text, todo, todoList, setTodoList }) => {
  return (
    <div id="idContainer">
      <li
        id="TodoStyle"
        className={`check-btn ${todo.completed ? 'completed' : ''}`}
      >
        {text}
      </li>
      <Complete todo={todo} todoList={todoList} setTodoList={setTodoList} />
      <Delete todo={todo} todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Todo;
