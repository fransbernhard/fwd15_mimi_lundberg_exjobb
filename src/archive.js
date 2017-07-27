/*global $:true*/

import React, { Component } from 'react';

// Component import
import Menu from './components/menu';
import Footer from './components/footer';
import ProductContainer from './components/productContainer';
import CategoryContainer from './components/categoryContainer';

class Archive extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      products: [],
      category: "",
      activeIndex: 0
    }
    this.filterHandler = this.filterHandler.bind(this);
  }

  // Set component state to the currently clicked "cat" (CategoryItem)
  filterHandler(cat, index){
    console.log('INDEX: ' + index);
    this.setState({
      category: cat,
      activeIndex: index
    })
  }

  componentDidMount(){
    const myInit = {
      method: "GET",
      headers: {
         "Content-Type": "application/json"
      }
    };

    fetch("/getProducts", myInit)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({products:data});
      })
      .catch(function(err) {
        console.log('ERROR!!! ' + err.message);
      });
  }

  render() {
    // 1. Render CategoryContainer with props products and filterHandler function to show all uniqe CategoryItems and filter products based on category
    // 2. Render ProductContainer based on category. If this.state.category.length is true - filter "prod" & where prod.categories is same type and name as this.state.category : else render all this.state.categories that matches "paint".
    // console.log(this.state.products);
    return (
      <div>
        <Menu />
        <div className="archive-container">
          <div className="archive-wrapper">
            <CategoryContainer
              filterHandler={this.filterHandler}
              products={this.state.products}
              activeIndex={this.state.activeIndex}
            />
            <br/><br/>
            <ProductContainer
              products={this.state.category.length
                ? this.state.products.filter((prod) => prod.catName === this.state.category)
                : this.state.products.filter((prod) => prod.catName === 'Paint')
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
