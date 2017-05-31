import React, { Component } from 'react';
class CategoryItem extends React.Component {

  // Render li element for every category with onClick event that calls function "handleClick"
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

export default CategoryItem;
