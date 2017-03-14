import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

// Module requires
import TodoItem from './todoItem';
import AddItem from './addItem';
import Menu from './menu';

// Create Component
class TodoComponent extends React.Component {

    state = {
        todos: ['wash up', 'eat some cheese', 'take a nap', 'sleep']
    }

    render() {
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete.bind(this)} />);
        }.bind(this));

        return(
            <div id="todo-list">
                <Menu />
                <p>The busiest people have the most leasure</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd.bind(this)}/>
            </div>
        );
    }

    // Custom functions
    onDelete(item) {
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });
    }

    onAdd(item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        });
    }

    // Lifecycle funcitons
    componentWillMount() {
        console.log('componentWillMound');
    }

    // Gets called AFTER render method
    componentDidMount() {
        console.log('componentDidMound');
        // any grabbing of external data
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
}

export default TodoComponent;
