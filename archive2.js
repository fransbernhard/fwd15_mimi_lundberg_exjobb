import React, { Component } from 'react';

import data from '../data.json';
console.log(data);

// Component import
import Menu from './components/menu';
import Footer from './components/footer';
import ProductContainer from './components/productContainer';
import CategoryContainer from './components/categoryContainer';

class Archive extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: data.products,
      category: ""
    }
    this.filterHandler = this.filterHandler.bind(this);
  }

  // Set component state to the currently clicked "cat" (CategoryItem)
  filterHandler(tag){
    this.setState({
      category: tag
    })
  }

  render() {
    // 1. Render CategoryContainer with props products and filterHandler function to show all uniqe CategoryItems and filter products based on category
    // 2. Render ProductContainer based on category. If this.state.category.length is true - filter "prod" & where prod.categories is same type and name as this.state.category : else render all this.state.categories that matches "paint".
    return (
      <div>
        <Menu />
        <div className="archive-container">
          <div className="archive-wrapper">
            <CategoryContainer
              filterHandler={this.filterHandler}
              products={this.state.products}
            />
            <br/><br/>
            <ProductContainer
              products={this.state.category.length
                ? this.state.products.filter((prod) => prod.category === this.state.category)
                : this.state.products.filter((prod) => prod.category === 'paint')
              }
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
};

export default Archive;
