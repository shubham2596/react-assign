/* eslint-disable no-unused-vars */
/* eslint-disable getter-return */
/* eslint-disable for-direction */
// eslint-disable-next-line for-direction
// eslint-disable-next-line getter-return
// eslint-disable-next-line no-compare-neg-zero
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
