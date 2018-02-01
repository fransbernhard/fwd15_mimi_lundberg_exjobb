import React, { Component } from 'react';
import Product from "../product";
import PropTypes from 'prop-types';

// key={product.id}

class ProductContainer extends Component {

  render(){
    return (
      <div>
        <div className="prodContainer">
          {
            this.props.products.map(product =>
              <Product
                key={product.itemId}
                product={product}
              />
            )
          }
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
