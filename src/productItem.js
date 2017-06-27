import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

// Custom styles for Modal image
const customStyles = {
  overlay: {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : 1000
  },
  content: {
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
    justifyContent        : 'center',
    alignItems            : 'center',
    zIndex                : 1000
  }
};

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      image: "",
      previewImg: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // Set state object "modalIsOpen" to true when click on <ProductItem/> component
  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  // Set state object "modalIsOpen" to false when click on <Modal/> component
  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render(){
    // Create variables for all <ProductItem/> description options. If <PoductItem/> object has props or state, render it. Otherwise return null.
    var img = this.state.image ?
      <img src={this.state.image} /> :
      null;

    const name = this.props.product.stocked ?
      <h3>{this.props.product.name}</h3> :
      <h3><span style={{fontStyle: 'italic'}}>
        {this.props.product.name}
      </span></h3>;

    var limited = this.props.product.limited ?
      <p>begränsad upplaga: {this.props.product.limited} ex</p> :
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

    var size = this.props.product.size ?
      <p>{this.props.product.size} cm</p> :
      null;

    var desc = this.props.product.description ?
      <p>{this.props.product.description}</p> :
      null;

    var modalName = this.props.product.name ?
      <h2>{this.props.product.name}</h2> :
      null;

    var modalDesc = this.props.product.description ?
      <h2>{this.props.product.description}</h2> :
      null;

    return (
      <div className="product hvr-sink" onClick={this.openModal}>
        <Modal
          isOpen={this.state.modalIsOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal image"
        >
          <div className="modal-box" onClick={this.closeModal}>
            <div className="close" onClick={this.closeModal}>x</div>
            <img className="modal-img" src={this.state.previewImg}/>
            {modalName}
            {modalDesc}
          </div>
        </Modal>
        {img}
        {name}
        {type}
        {limited}
        {available}
        {size}
        {price}
        {desc}
      </div>
    );
  };

  // Import all thumbnail + previewImg images and then() put them into state. If rejection occures catch() returns rejection reasen (err).
  componentDidMount() {
    import(`./images/${this.props.product.thumbnail}`).then(
      (image) => this.setState({
        image: image
      })
    ).catch((err) => {
      console.log('Could not import thumbnail: ' + err);
    });
    import(`./images/${this.props.product.previewImg}`).then(
      (previewImg) => this.setState({
        previewImg: previewImg
      })
    ).catch((err) => {
      console.log('Could not import thumbnail: previewImg ' + err);
    });
  }
};

// Components expected proptypes
ProductItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductItem;
