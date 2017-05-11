import React, { Component } from 'react';
import ProductCategory from "./productCategory";

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

export default FilterProducts;
