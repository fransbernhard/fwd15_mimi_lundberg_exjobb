import React, { Component } from 'react';

// constructor(props) {
//   super(props);
//   this.state = {};
// }

class ProductItem extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.openPreview = this.openPreview.bind(this);
  }

  openPreview(id){
      console.log(id);
      /*
        foreach product i this.props.products
          if id ===product.id i product
            skapa modul/popup med data i product
            <modul>
            <img> product.previewImage
            <p> product.titel
      */
  }

  componentDidMount() {
    this.props.product.thumbnail && import(`./images/${this.props.product.thumbnail}`).then((image) =>
      this.setState({image: image}))
  }

  render(){
    const name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;

    var limited = this.props.product.limited ?
      <p>begränsad upplaga: {this.props.product.limited}</p> :
      null;

    var available = this.props.product.available ?
      <p>tillgängliga: {this.props.product.available} ex</p> :
      null;

    if(this.props.product.price){
      var price = this.props.product.price + ' kr';
    }

    // const img = this.props.product.thumbnail;
    // var img = import(`./img/${this.props.product.thumbnail}`).then(img => img);
    // <img src={img ? img : null} />

    return (
      <div className="product hvr-sink" onClick={this.openPreview(this.props.product.id)}>
        {this.state.image ? <img src={this.state.image}/> : this.props.product.thumbnail}
        <h3>{name}</h3>
        <p>{this.props.product.type}</p>
        {limited}
        {available}
        <p>{price}</p>
      </div>
    );
  };
};

export default ProductItem;
