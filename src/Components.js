import React, { Component } from 'react';

// a React component extented from React.Component
class Todo extends Component {
    render() {
        const { props } = this;
        return (
            <li>
                <span>{ props.todo.id }</span>
                <input type="checkbox" checked={ props.todo.checked } onChange={ props.onToggle.bind(this, props.todo.id) } />
                <button className="space" onClick={ props.onDelete.bind(this, props.todo.id) }>Delete</button>
                <span className="space">{ props.todo.text }</span>
            </li>
        );
    }
}

// a functional component
const Todo = props => (
    <li>
      <span>{ props.todo.id }</span>
      <input type="checkbox" checked={ props.todo.checked } onChange={ props.onToggle.bind(this, props.todo.id) } />
      <button className="space" onClick={ props.onDelete.bind(this, props.todo.id) }>Delete</button>
      <span className="space">{ props.todo.text }</span>
    </li>
);

// a functional component
function Todo(props){
    return (
        <li>
            <span>{ props.todo.id }</span>
            <input type="checkbox" checked={ props.todo.checked } onChange={ props.onToggle.bind(this, props.todo.id) } />
            <button className="space" onClick={ props.onDelete.bind(this, props.todo.id) }>Delete</button>
            <span className="space">{ props.todo.text }</span>
        </li>
    );
}

