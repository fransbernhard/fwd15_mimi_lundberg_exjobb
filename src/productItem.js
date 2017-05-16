import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : 'rgba(0, 0, 0, 0.8)',
    width                 : '100vw',
    height                : '100vh',
    display               : 'flex',
    'justify-content'     : 'center',
    'align-items'         : 'center',
    'flex-flow'           : 'column'
  }
};

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    // this.openPreview = this.openPreview.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
    console.log('OpenModal');
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log(this.props.product.id);
    console.log('It is now open');
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  // openPreview(){
  //   // const hihi = [...new Set(this.props.product.map(prod => prod.id))]
  //   // e.preventDefault();
  //   // console.log(this.props.product.id);
  //   var img = this.props.product.thumbnail;
  //   var modalImg = this.props.product.previewImg;
  //   var captionText = this.props.product.name;
  //
  //   if (this.props.product.id){
  //     console.log('nu måste du göra någor');
  //     return this.props.product.previewImg;
  //   } else {
  //     console.log('noho');
  //   }
  //
  //
  //   // this.props.product.map((product) => {
  //   //   if(id === this.props.product.id){
  //   //     console.log("funkar");
  //   //   }
  //   // })
  //
  //   /*
  //     foreach product in this.props.products
  //       if id ===product.id in product
  //         skapa modul/popup med data i product
  //         <modul>
  //         <img> product.previewImage
  //         <p> product.titel
  //   */
  //
  // }

  render(){
    var img = this.state.image ? <img src={this.state.image} /> : this.props.product.thumbnail;

    const name = this.props.product.stocked ?
      <h3>{this.props.product.name}</h3> :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;

    var limited = this.props.product.limited ?
      <p>begränsad upplaga: {this.props.product.limited}</p> :
      null;

    var available = this.props.product.available ?
      <p>tillgängliga: {this.props.product.available} ex</p> :
      null;

    var price = this.props.product.price ?
      <p>{this.props.product.price}  kr</p> :
      null;

    var type = this.props.product.type ?
      <p>{this.props.product.type}</p> :
      null;

    // const img = this.props.product.thumbnail;
    // var img = import(`./img/${this.props.product.thumbnail}`).then(img => img);
    // <img src={img ? img : null} />

    return (
      <div className="product hvr-sink" onClick={this.openModal}>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <div className="close" onClick={this.closeModal}>X</div>
            <img className="modal-img" src={this.state.image}/>
          </div>
        </Modal>
        {img}
        {name}
        {type}
        {limited}
        {available}
        {price}
      </div>
    );
  };

  componentDidMount() {
    this.props.product.thumbnail && import(`./images/${this.props.product.thumbnail}`).then(
      (image) => this.setState({
        image: image
      })
    )
  }
};

export default ProductItem;
