import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends Component {

  // Render a li element with onClick event - for every uniqe category - that calls property function "handleClick" in parent component CategoryContainer
  render(){
    return (
      <li
        className={this.props.active ? 'category active' : 'category inActive'}
        onClick={this.props.handleClick}
      >
          {this.props.category}
      </li>
    );
  };
};

// Components expected proptypes
CategoryItem.propTypes = {
  handleClick: PropTypes.func,
  category: PropTypes.string
}

export default CategoryItem;
