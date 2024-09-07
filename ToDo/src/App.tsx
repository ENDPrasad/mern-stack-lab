import React from 'react';

import './reusable.css'
import './App.css';
import Title from './components/Title';
import InputSection from './components/InputSection';
import TodoList from './components/TodoList';
import { useSelector } from 'react-redux';
import { RootState } from './store';


function App() {
  const data = useSelector((state:RootState)=>state.todos.todos)

  return (
    <div className="App flex">
      <div className="todo-app">

      <Title />
      <InputSection />
      <TodoList todos={data} />
      </div>
    </div>
  );
}

export default App;
