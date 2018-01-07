import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render(){
    return (
      <li
        className={this.props.active ? 'category active' : 'category inActive'}
        onClick={this.props.handleClick}
      ><button className="btn">
          {this.props.category}
      </button></li>
    );
  };
};

// Components expected proptypes
Category.propTypes = {
  handleClick: PropTypes.func,
  category: PropTypes.string
}

export default Category;
