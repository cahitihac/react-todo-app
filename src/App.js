import React, { Component } from 'react';
import './App.css';

import Todo from './Todo';

let id = 0;

class TodoApp extends Component {
  constructor (props) {
    super(props);

    this.state = {
      todos: [],
      text: ""
    }
  }

  render() {
    const { todos, text } = this.state;

    return (
      <div>
        <div>Todo count: { todos.length }</div>
        <div>Checked Todo count: { todos.filter(todo => todo.checked).length }</div>
        <input value={ text } onChange={ this.onTextChange.bind(this) } autoFocus/>
        <button className="space" onClick={ this.addTodo.bind(this) }>Add Todo</button>
        <ul>
          {
            todos.map(todo => (
              <Todo
                todo={ todo }
                onDelete={ this.removeTodo.bind(this) }
                onToggle={ this.toggleTodo.bind(this) }
              />))
          }
        </ul>
      </div>
    );
  }

  addTodo() {
    const { todos, text } = this.state;

    this.setState({
      todos: [...todos, { text: text, id: ++id, checked: false }],
      text: ""
    });
  }

  removeTodo(id) {
    const { todos } = this.state;

    this.setState({
      todos: [...todos.filter(todo => todo.id !== id)]
    });
  }

  toggleTodo(id) {
    const { todos } = this.state;

    this.setState({
      todos: todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        }
      })
    });
  }

  onTextChange(event) {
    const text = event.target.value;

    this.setState({ text });
  }
}

export default TodoApp;