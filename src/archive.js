import React, { Component } from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
// import json from './data.json';

// Create Component
class ProductCategory extends React.Component {
  render(){
    return (<li><a>{this.props.category}</a></li>)
  }
}

class ProductItem extends React.Component {
  render(){
    const name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;

    const limited = this.props.product.limited ?
      <p>begränsad upplaga: {this.props.product.limited}</p> :
      <span>{this.props.product.limited}</span>;

    if(this.props.product.available){
      var available = 'tillgängliga: ' + this.props.product.available + ' ex';
    }

    if(this.props.product.price){
      var price = this.props.product.price + ' kr';
    }

    return (
      <div className="product hvr-sink">
        <img src={require('./img/main.jpg')} />
        <h3>{name}</h3>
        <p>{this.props.product.type}</p>
        {limited}
        <p>{available}</p>
        <p>{price}</p>
      </div>
    );
  }
}

class FilterProducts extends React.Component {
  render(){
    var cat = [];
    var lastCategory = null;
    this.props.products.forEach(function(product){
      if(product.category !== lastCategory) {
        cat.push(<ProductCategory category={product.category} key={product.category} />);
      }
      lastCategory = product.category;
    });
    return (
      <div>
        <ul className="filterList">{cat}</ul>
      </div>
    )
  }
}

class ProductContainer extends React.Component {
  render(){
    var items = [];
    // var lastCategory = null;
    this.props.products.forEach(function(product) {
      // if(product.category !== lastCategory) {
      //   items.push(<ProductCategory category={product.category} key={product.category} />);
      // }
      items.push(<ProductItem product={product} key={product.name} />);
      // lastCategory = product.category;
    });
    return (
      <div>
        <div className="prodContainer">{items}</div>
      </div>
    )
  }
}

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
  {category: 'print', type: 'akvarellppr, 70x100 cm', limited: '30', available: '28', price: '3,000', stocked: true, name: 'Mimi | second edition'},
  {category: 'print', type: 'akvarellppr, 70x100 cm', stocked: true, price: '5,000', limited: '16', available: '8', name: 'Elephnt'},
  {category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'Elefant'},
  {category: 'painting', type: 'matt emulsion', stocked: true, name: 'Mimi', limited: '30', available: '28'},
  {category: 'painting', type: 'plexiglas', stocked: true, name: 'Comsiter', limited: '16'},
  {category: 'print', limited: '30 ex', available: '28', type: 'matt olja', stocked: false, name: 'Maja'},
  {category: 'print', price: '1,500', type: 'matt olja', available: '14', stocked: true, name: 'Loved'},
  {category: 'print', limited: '30', available: '28', type: 'matt olja', stocked: false, name: 'Pandas'},
  {category: 'print', type: 'matt olja', stocked: true, name: 'Lovesd', limited: '30', available: '28'}
];

export default Archive;
