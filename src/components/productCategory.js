import React, { Component } from 'react';

class ProductCategory extends React.Component {
  render(){
    return (<li><a>{this.props.category}</a></li>);
  };
};

export default ProductCategory;
