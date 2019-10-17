import React, { Component } from 'react';

let id = 0;

class Todo extends Component {
    constructor(props) {
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
                <h2>Total Todo count: </h2>
                <h2>Selected Todo count: </h2>
                <input value={ text } type="text" onChange={ (event) => this.setState({ text: event.target.value }) }/>
                <button onClick={ this._addTodo.bind(this) }>Add Todo</button>
                <ul>
                    { todos.map(todo => <TodoItem todo={ todo } onDelete={ this._deleteTodo.bind(this, todo.id) } />) }
                </ul>
            </div>
        );
    }

    _addTodo() {
        const text = this.state.text;

        this.setState({
            todos: [{ id: ++id, text: text, checked: false }, ...this.state.todos],
            text: ""
        });
    }

    _deleteTodo(id) {
        const { todos } = this.state;

        this.setState({
            todos: [...todos.filter(todo => todo.id !== id)]
        });

    }

}

const TodoItem = props => {
    return (
        <li>
            <span>{ props.todo.id }</span>
            <input type="checkbox" checked={ props.todo.checked } />
            <button onClick={ () => props.onDelete() }>Delete</button>
            <span>{ props.todo.text }</span>
        </li>
    );
}

export default Todo;