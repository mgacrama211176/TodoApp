import React from 'react';

const Delete = ({ todoList, todo, setTodoList }) => {
  const deleted = () => {
    setTodoList(todoList.filter((element) => element.id !== todo.id));
  };
  return (
    <div>
      <button
        className={`trash-btn  ${todo.completed ? 'completed' : ''}`}
        id="trash-style"
        onClick={deleted}
      >
        Delete
      </button>
    </div>
  );
};

export default Delete;
