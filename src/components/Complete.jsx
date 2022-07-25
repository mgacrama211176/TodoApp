import React from 'react';
import './Components.css';

const Complete = ({ todoList, setTodoList, todo }) => {
  const completed = () => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <h1>
        <button
          className={`check-btn ${todo.completed ? 'completed' : ''}`}
          id="check-style"
          onClick={completed}
        >
          DONE
        </button>
      </h1>
    </div>
  );
};

export default Complete;
