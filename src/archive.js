import React, { Component } from 'react';
// import Modal from 'react-modal';

// Component import
import Menu from './components/menu';
import Footer from './components/footer';
import ProductItem from "./productItem";
import CategoryItem from './components/categoryItem';

// Map through Archives this.state array "products" and create a ProductItem component for every object. "Key" property is to use a string that uniquely identifies a list item among its siblings (product.id)
class ProductContainer extends React.Component {
  render(){
    return (
      <div>
        <div className="prodContainer">{
          this.props.products.map(product => <ProductItem product={product} key={product.id} />)}
        </div>
      </div>
    );
  };
};

class CategoryContainer extends React.Component {
  render(){
    // 1. "Set objects" are a collections of unique values. "...new Set" saves every unique category (in products.categories) in the const "categories".
    const categories = [...new Set(this.props.products.map(cat => cat.category))];
    // 2. Map over const "categories". For every cat in "categories" => Create CategoryItem component.
    // 3. CategoryItem property handleClick is triggered with onClick event. Property handleClick calls anonymous function "filterHandler" with clicked "cat" as parameter.
    // 4. Set CategoryItem[i] property category[i] and key[i] to parameter "cat[i]".
    return (
      <div>
        <ul className="filterList">{categories.map(cat => <CategoryItem handleClick={() => this.props.filterHandler(cat)} category={cat} key={cat} />)}</ul>
      </div>
    );
  };
};

class Archive extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [
        {id: 1, category: 'print', type: 'akvarellppr, 70x100 cm', limited: '30', available: '28', price: '3,000', stocked: true, name: 'Mimi | second edition A', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
        {id: 2, category: 'print', type: 'akvarellppr, 70x100 cm', stocked: true, price: '5,000', limited: '16', available: '8', name: 'Elephnt B', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
        {id: 6, category: 'painting', type: 'matt emulsion', stocked: true, name: 'Mimi F', limited: '30', available: '28', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
        {id: 7, category: 'painting', type: 'plexiglas', stocked: true, name: 'Comsiter G', limited: '16', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
        {id: 3, category: 'places', stocked: true, name: 'Hemma hos Magnus Nordstrand med en liten vän', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
        {id: 4, category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'Els D', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
        {id: 5, category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'Elet E', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
        {id: 8, category: 'print', limited: '30 ex', available: '28', type: 'matt olja', stocked: false, name: 'Maja H', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
        {id: 9, category: 'print', price: '1,500', type: 'matt olja', available: '14', stocked: true, name: 'Loved I', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
        {id: 10, category: 'print', limited: '30', available: '28', type: 'matt olja', stocked: false, name: 'Pandas J', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
        {id: 11, category: 'print', limited: '30', available: '28', type: 'matt olja', stocked: true, name: 'YAssss', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
        {id: 12, category: 'print', limited: '30', available: '28', type: 'matt olja', stocked: true, name: 'Pandas aaJ', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"}
      ],
      category: ""
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  // Set state to the "cat" parameter from CatogoryItem
  filterHandler(tag){
    this.setState({
      category: tag
    })
  }

  // removed prop "categories={[]}" from CategoryContainer
  render() {
    // 1. Render CategoryContainer with props filterHandler function and state (product object array)
    // 2. Render ProductContainer. If this.state.category.length is true (an array) - filter function calls anonymous function with parameter "prod" where prod.categories is same type and name as this.state.category, render these objects : else render all this.state.products.
    return (
      <div>
        <Menu />
        <div className="archive-container">
          <div className="archive-wrapper">
            <CategoryContainer filterHandler={this.filterHandler} products={this.state.products}/>
            <br/><br/>
            <ProductContainer products={this.state.category.length ? this.state.products.filter((prod) => prod.category === this.state.category) : this.state.products}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
};

export default Archive;
