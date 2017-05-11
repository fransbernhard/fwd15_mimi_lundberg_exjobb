import React, { Component } from 'react';
import ProductItem from "../productItem";

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

export default ProductContainer;
