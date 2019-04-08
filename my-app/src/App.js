import React, { Component } from 'react';
import './App.css';
import TodoList from './ToDoList/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To Do List</h2>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
