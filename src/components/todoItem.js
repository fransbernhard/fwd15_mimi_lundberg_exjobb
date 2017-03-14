import React, { Component } from 'react';

//Create TodoItem component
class TodoItem extends React.Component {

    render() {
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name" ref="thisItem">{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete.bind(this)}> x </span>
                </div>
            </li>
        );
    }

    //Custom functions
    handleDelete() {
        this.props.onDelete(this.props.item);
    }
}

export default TodoItem;
