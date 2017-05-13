import React, { Component } from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
// import CategoryContainer from "./components/categoryContainer";
import ProductItem from "./productItem";
import CategoryItem from './components/categoryItem';

class ProductContainer extends React.Component {
  render(){
    return (
      <div>
        <div className="prodContainer">{
          this.props.products.map(product => <ProductItem product={product} key={product.name} />)}
        </div>
      </div>
    );
  };
};

class CategoryContainer extends React.Component {
  render(){
    const categories = [...new Set(this.props.products.map(cat => cat.category))];
    return (
      <div>
        <ul className="filterList">{categories.map(cat => <CategoryItem handleClick={() => this.props.filterHandler(cat)} category={cat} key={cat} />)}</ul>
      </div>
    );
  };
};

class Archive extends React.Component {
  state = {
    products: [
      {id: 1, category: 'print', type: 'akvarellppr, 70x100 cm', limited: '30', available: '28', price: '3,000', stocked: true, name: 'Mimi | second edition A', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
      {id: 2, category: 'print', type: 'akvarellppr, 70x100 cm', stocked: true, price: '5,000', limited: '16', available: '8', name: 'Elephnt B', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
      {id: 3, category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'hihi C', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
      {id: 4, category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'Els D', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
      {id: 5, category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'Elet E', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
      {id: 6, category: 'painting', type: 'matt emulsion', stocked: true, name: 'Mimi F', limited: '30', available: '28', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
      {id: 7, category: 'painting', type: 'plexiglas', stocked: true, name: 'Comsiter G', limited: '16', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
      {id: 8, category: 'print', limited: '30 ex', available: '28', type: 'matt olja', stocked: false, name: 'Maja H', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
      {id: 9, category: 'print', price: '1,500', type: 'matt olja', available: '14', stocked: true, name: 'Loved I', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
      {id: 10, category: 'print', limited: '30', available: '28', type: 'matt olja', stocked: false, name: 'Pandas J', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"}
    ],
    category: ""
  }

  filterHandler = (tag) => this.setState(() => ({category: tag}))
// <p>{JSON.stringify(this.state)}</p>
  render() {
    return (
      <div>
        <Menu />

        <div className="archive-container">
          <div className="archive-wrapper">
            <CategoryContainer categoies={[]} filterHandler={this.filterHandler} products={this.state.products}/>
            <br/><br/>
            <ProductContainer products={this.state.category.length ? this.state.products.filter((prod) => prod.category === this.state.category) : this.state.products}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
};

var PRODUCTS = [
  {id: 1, category: 'print', type: 'akvarellppr, 70x100 cm', limited: '30', available: '28', price: '3,000', stocked: true, name: 'Mimi | second edition A', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
  {id: 2, category: 'print', type: 'akvarellppr, 70x100 cm', stocked: true, price: '5,000', limited: '16', available: '8', name: 'Elephnt B', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
  {id: 3, category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'hihi C', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
  {id: 4, category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'Els D', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
  {id: 5, category: 'places', limited: '30', available: '28', type: 'papper', price: '1,500', stocked: false, name: 'Elet E', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
  {id: 6, category: 'painting', type: 'matt emulsion', stocked: true, name: 'Mimi F', limited: '30', available: '28', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
  {id: 7, category: 'painting', type: 'plexiglas', stocked: true, name: 'Comsiter G', limited: '16', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
  {id: 8, category: 'print', limited: '30 ex', available: '28', type: 'matt olja', stocked: false, name: 'Maja H', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"},
  {id: 9, category: 'print', price: '1,500', type: 'matt olja', available: '14', stocked: true, name: 'Loved I', thumbnail: 'main.jpg', previewImg: "magden.jpg"},
  {id: 10, category: 'print', limited: '30', available: '28', type: 'matt olja', stocked: false, name: 'Pandas J', thumbnail: 'cloud.jpg', previewImg: "magden.jpg"}
];

export default Archive;
