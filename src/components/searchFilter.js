import React, { Component } from 'react';

// SearchBar needs to display the search text and checked state
class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleFilterTextInputChange =
        this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange =
        this.handleInStockInputChange.bind(this);
    }

    // search input
    handleFilterTextInputChange(e){
        this.props.onFilterTextInput(e.target.value);
    }

    // user checkbox
    handleInStockInputChange(e){
        this.props.onInStockInput(e.target.checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockInputChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;
