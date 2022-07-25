import React from 'react';
import Todo from './Todo';

import './Components.css';

const TodoList = ({ todoList, text, setTodoList }) => {
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todoList={todoList}
            setTodoList={setTodoList}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
