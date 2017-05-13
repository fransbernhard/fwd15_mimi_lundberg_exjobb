import React, { Component } from 'react';

class CategoryItem extends React.Component {
  render(){
    return (<li className="category" onClick={this.props.handleClick}>{this.props.category}</li>);
  };
};

export default CategoryItem;
