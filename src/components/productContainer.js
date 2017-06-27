import React, { Component } from 'react';
import ProductItem from "../productItem";
import PropTypes from 'prop-types';

// key={product.id}

// Map through products and create a ProductItem component for every object. ProductItems property "key" gives every ProductItem a unique id value.
class ProductContainer extends Component {
  render(){
    return (
      <div>
        <div className="prodContainer">
          {this.props.products.map(product =>
            <ProductItem
              product={product}
              key={product.itemId}
            />
          )}
        </div>
      </div>
    );
  };
};

// Components expected proptypes
ProductContainer.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductContainer;
