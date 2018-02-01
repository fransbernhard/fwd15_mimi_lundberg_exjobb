import React, { Component } from 'react';
import Category from './category';
import PropTypes from 'prop-types';

class CategoryContainer extends Component {
  render(){
    const categories = [...new Set(this.props.products.map(prod => prod.catName))];

    return (
      <ul className="filterList">
        {
          categories.map((cat, index) =>
            <Category
              key={index}
              category={cat}
              active={index === this.props.activeIndex}
              handleClick={() => this.props.filterHandler(cat, index)}
            />
          )
        }
      </ul>
    );
  };
};

CategoryContainer.propTypes = {
  products: PropTypes.array.isRequired,
  filterHandler: PropTypes.func.isRequired
}

export default CategoryContainer;
