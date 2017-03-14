import React, { Component } from 'react';

//Create AddItem component
class AddItem extends React.Component {
    render() {
        return (
            <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" required ref="newItem" />
                <input type="submit" value="Hit me"/>
            </form>
        );
    }

    // Custom functions
    handleSubmit(e) {
        // onSubmit has default reload page, then item
        // get lost. e.preventdefault prohibits default behaviour
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
}

export default AddItem;
