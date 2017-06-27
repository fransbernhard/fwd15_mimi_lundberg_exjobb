import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends Component {
  componentDidMount() {
    console.log('this.props.category: ' + this.props.category);
  }

  // Render a li element with onClick event - for every uniqe category - that calls property function "handleClick" in parent component CategoryContainer
  render(){
    return (
      <div>
        <li className="category" onClick={this.props.handleClick}>
          {this.props.category}
        </li>
      </div>
    );
  };
};

// Components expected proptypes
CategoryItem.propTypes = {
  handleClick: PropTypes.func,
  category: PropTypes.string.isRequired
}

export default CategoryItem;
