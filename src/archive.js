import React, { Component } from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
import path from 'path';
// import json from './data.json';

// Create Component
class ProductCategory extends React.Component {
  render(){
    return (<li><a>{this.props.category}</a></li>);
  };
};

// constructor(props) {
//   super(props);
//   this.state = {};
// }
class ProductItem extends React.Component {
  state = {};

  componentDidMount() {
    this.props.product.url && import(`./images/${this.props.product.url}`).then((image) =>
      this.setState({image: image}))
  }

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

    // const img = this.props.product.url;
    // var img = import(`./img/${this.props.product.url}`).then(img => img);
    // <img src={img ? img : null} />

    return (
      <div className="product hvr-sink">
        {this.state.image ? <img src={this.state.image}/> : this.props.product.url}
        <h3>{name}</h3>
        <p>{this.props.product.type}</p>
        {limited}
        <p>{available}</p>
        <p>{price}</p>
      </div>
    );
  };
};

class ProductContainer extends React.Component {
  render(){
    return (
      <div>
        <div className="prodContainer">{
          this.props.products.map(product => <ProductItem product={product} key={product.name} />)}</div>
      </div>
    );
  };
};

class FilterProducts extends React.Component {
  render(){
    const categories = [...new Set(this.props.products.map(cat => cat.category))];
    return (
      <div>
        <ul className="filterList">{categories.map(cat => <ProductCategory category={cat} key={cat} />)}</ul>
      </div>
    );
  };
};

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
  {category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'hihi C'},
  {category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'Els D'},
  {category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'Elet E'},
  {category: 'painting', type: 'matt emulsion', stocked: true, name: 'Mimi F', limited: '30', available: '28'},
  {category: 'painting', type: 'plexiglas', stocked: true, name: 'Comsiter G', limited: '16'},
  {category: 'print', limited: '30 ex', available: '28', type: 'matt olja', stocked: false, name: 'Maja H'},
  {category: 'print', price: '1,500', type: 'matt olja', available: '14', stocked: true, name: 'Loved I'},
  {category: 'print', limited: '30', available: '28', type: 'matt olja', stocked: false, name: 'Pandas J'},
];

export default Archive;
