import React, { Component } from 'react';
import CategoryItem from './categoryItem';
import PropTypes from 'prop-types';

class CategoryContainer extends Component {

  // componentDidMount(){
  //   console.log('DATA: ' + this.props.products);
  // }

  render(){
    // 1. "Set" are a collections of unique values. "new Set" creates a array of uniqe categories (from the products array) and saves it in the const "categories".
    const categories = [...new Set(this.props.products.map(cat => cat.catName))];

    // 2. Map over "categories" array. For every cat in "categories" => Create CategoryItem component and set category and key props to "cat".
    // 3. CategoryItem prop "handleClick" is triggered with CategoryItem onClick event. "handleClick" calls anonymous function "filterHandler" with clicked "cat" as parameter.
    return (
      <div>
        <ul className="filterList">{
          categories.map((cat, index) =>
            <CategoryItem
              key={index}
              index={index}
              category={cat}
              active={index === this.props.activeIndex}
              handleClick={() => this.props.filterHandler(cat, index)}
            />
          )
        }</ul>
      </div>
    );
  };
};

// Components expected proptypes
CategoryContainer.propTypes = {
  products: PropTypes.array.isRequired,
  filterHandler: PropTypes.func.isRequired
}

export default CategoryContainer;
