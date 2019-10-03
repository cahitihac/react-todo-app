import React from 'react';
import './App.css';

const Todo = props => (
    <li>
      <span>{ props.todo.id }</span>
      <input type="checkbox" checked={ props.todo.checked } onChange={ props.onToggle.bind(this, props.todo.id) } />
      <button className="space" onClick={ props.onDelete.bind(this, props.todo.id) }>Delete</button>
      <span className="space">{ props.todo.text }</span>
    </li>
);

export default Todo;