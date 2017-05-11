import React, { Component } from 'react';

// constructor(props) {
//   super(props);
//   this.state = {};
// }
class ProductItem extends React.Component {
  state = {};

  componentDidMount() {
    this.props.product.url && import(`./images/${this.props.product.url}`).then((image) =>
      this.setState({image: image}))
  }

  render(){
    const name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;

    const limited = this.props.product.limited ?
      <p>begränsad upplaga: {this.props.product.limited}</p> :
      <span>{this.props.product.limited}</span>;

    if(this.props.product.available){
      var available = 'tillgängliga: ' + this.props.product.available + ' ex';
    }

    if(this.props.product.price){
      var price = this.props.product.price + ' kr';
    }

    // const img = this.props.product.url;
    // var img = import(`./img/${this.props.product.url}`).then(img => img);
    // <img src={img ? img : null} />

    return (
      <div className="product hvr-sink">
        {this.state.image ? <img src={this.state.image}/> : this.props.product.url}
        <h3>{name}</h3>
        <p>{this.props.product.type}</p>
        {limited}
        <p>{available}</p>
        <p>{price}</p>
      </div>
    );
  };
};

export default ProductItem;
