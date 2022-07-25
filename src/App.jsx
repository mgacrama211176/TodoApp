import React, { useState } from 'react';
import TextContainer from './components/TextContainer';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TextContainer
        setText={setText}
        todoList={todoList}
        setTodoList={setTodoList}
        text={text}
      />
      <h1>To-Do List</h1>
      {/* PROPS for TODOLIST */}
      <TodoList text={text} todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
