import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import ProductRow from './components/productRow';
import ProductCategoryRow from './components/productCategoryRow';
import SearchBar from './components/searchFilter';

// FilterableProductTable (mother class, contains all)
// SearchBar (recieves all user input)
// ProductTable (displays and filter data based on user input)
//   ProductCategoryRow (display heading for each category)
//   ProductRow (display row for each product)

// ProductTable needs to filter the product list based on state
class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCategory = null;
        console.log(this.props.inStockOnly)

        this.props.products.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1
            || (!product.stocked && this.props.inStockOnly)) {
                return;
            }

            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category}
                    />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

// The common owner component is FilterableProductTable. It conceptually makes sense for the filter text and checked value to live in FilterableProductTable.
// We've decided that our state lives in FilterableProductTable.
// 1. Add an instance property this.state = {filterText: '', inStockOnly: false} to FilterableProductTable's constructor to reflect the initial state of your application
// 2. Pass filterText and inStockOnly to ProductTable and SearchBar as a prop.
// 3. Use these props to filter the rows in ProductTable and set the values of the form fields in SearchBar.
// 4. Add inverse data flow: So far data flows down the hirearchy, need to flow up when user clicks checkbox or inputs text in search.
// Since components should only update their own state, FilterableProductTable will pass callbacks to SearchBar that will fire whenever the state should be updated. Use the onChange event on SearchBar = the inputs to be notified of it. Callbacks passed by FilterableProductTable will call setState(), and the app will be updated.
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.handleFilterTextInput =
        this.handleFilterTextInput.bind(this);
        this.handleInStockInput =
        this.handleInStockInput.bind(this);
    }

    // filter text
    handleFilterTextInput(filterText){
        this.setState({
            filterText: filterText
        });
    }

    // checked value
    handleInStockInput(inStockOnly){
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
    {category: 'Fabric', price: '$199.99', stocked: false, name: 'Bommull 7'}
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('container')
);

// Hot module reloader (injecting code)
if(DEVELOPMENT){
		if (module.hot) {
				module.hot.accept();
		}
}
