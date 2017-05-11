import React, { Component } from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
import ProductContainer from './components/productContainer';
import FilterProducts from "./components/filterProducts";

class Archive extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="archive-container">
          <div className="archive-wrapper">
            <FilterProducts products={PRODUCTS}/>
            <br/><br/>
            <ProductContainer products={PRODUCTS}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
};

var PRODUCTS = [
  {category: 'print', type: 'akvarellppr, 70x100 cm', limited: '30', available: '28', price: '3,000', stocked: true, name: 'Mimi | second edition A', url: 'main.jpg'},
  {category: 'print', type: 'akvarellppr, 70x100 cm', stocked: true, price: '5,000', limited: '16', available: '8', name: 'Elephnt B', url: 'cloud.jpg'},
  {category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'hihi C', url: 'main.jpg'},
  {category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'Els D', url: 'cloud.jpg'},
  {category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'Elet E', url: 'cloud.jpg'},
  {category: 'painting', type: 'matt emulsion', stocked: true, name: 'Mimi F', limited: '30', available: '28', url: 'main.jpg'},
  {category: 'painting', type: 'plexiglas', stocked: true, name: 'Comsiter G', limited: '16', url: 'cloud.jpg'},
  {category: 'print', limited: '30 ex', available: '28', type: 'matt olja', stocked: false, name: 'Maja H', url: 'cloud.jpg'},
  {category: 'print', price: '1,500', type: 'matt olja', available: '14', stocked: true, name: 'Loved I', url: 'main.jpg'},
  {category: 'print', limited: '30', available: '28', type: 'matt olja', stocked: false, name: 'Pandas J', url: 'cloud.jpg'},
];

export default Archive;
