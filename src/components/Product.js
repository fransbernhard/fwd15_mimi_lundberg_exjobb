import React, { PureComponent } from 'react';
import Modal from 'react-modal';

const modalStyles = {
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
        top               : '50%',
        left              : '50%',
        right             : 'auto',
        bottom            : 'auto',
        marginRight       : '-50%',
        transform         : 'translate(-50%, -50%)',
        background        : 'rgba(0, 0, 0, 0.8)',
        width             : '100vw',
        height            : '100vh',
        display           : 'flex',
        justifyContent    : 'center',
        alignItems        : 'center',
        zIndex            : 1000
    }
};

class Product extends PureComponent {
    state = {
        modalIsOpen: false,
        image: "",
        previewImg: ""
    }

    openModal = () => {
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    addClasses = categoryName => {
        return (categoryName === 'Places')
            ? 'placesImgClass'
            : 'productImgClass'
    }

    addProductContainererClass = categoryName => {
        return (categoryName === 'Places')
            ? 'hvr-sink placesBoxClass'
            : 'hvr-sink productBoxClass'
    }

    componentWillMount() {
        Modal.setAppElement('body')
    }

    render(){
        const { image, previewImg, modalIsOpen } = this.state;
        const { product } = this.props;

        const imageBackground = image && {
            backgroundImage: 'url(' + image + ')'
        }

        const categoryName = product.catName;

        const img = image && categoryName === 'Places'
            ? <div className={this.addClasses(categoryName)} style={imageBackground}/>
            : <img className={this.addClasses(categoryName)} alt={product.name} src={image} />

        const name = parseInt(product.stocked)
          ? <h3>{product.name}</h3>
          : <h3>{product.name} - SÅLD</h3>;

        const description = product.desc
            && <p>{product.desc}</p>

        const limited = product.limited
            && <p>begränsad upplaga: {product.limited} ex</p>

        const available = product.available
            && <p>tillgängliga: {product.available} ex</p>

        const price = product.price
            && <p>{product.price} kr</p>

        const type = product.type
            && <p>{product.type}</p>

        const size = product.size
            && <p>{product.size} cm</p>

        const modalName = product.name
            && <h2><a className="modalDesc" href="mailto:magdamargaretha@gmail.com?subject=Fri!%20Fri!%20Fri!&body=Innan%20du%20skriver%20vill%20jag%20bara%20säga%20hej.%20Hej">{product.name}</a></h2>

        const modalDescription = product.modalDesc
            && <h2>{product.modalDesc}</h2>

        const modalDescriptionSmall = product.modalDesc
            && <p>{product.modalDesc}</p>

        return (
            <div>
                <div className={this.addProductContainererClass(product.catName)} onClick={this.openModal}>
                    {img}
                    {name}
                    {type}
                    {limited}
                    {available}
                    {size}
                    {price}
                    {description}
                    {modalDescriptionSmall}
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={this.closeModal}
                    style={modalStyles}
                    contentLabel="Modal"
                >
                    <div className="modal-box">
                        <div className="close" onClick={this.closeModal}>x</div>
                        <img src={previewImg}/>
                        {modalName}
                        {modalDescription}
                    </div>
                </Modal>
            </div>
        )
    }

    componentDidMount() {
        // import(`../images/${this.props.product.thumbnail}`)
        //     .then((image) => {
        //         this.setState({
        //             image: image
        //         })
        //     }).catch(err => {
        //         console.log('Error importing thumbnail: ' + err);
        //     });

        // import(`./images/${product.previewImg}`)
        //     .then(
        //         (previewImg) => this.setState({
        //             previewImg: previewImg
        //         })
        //     ).catch((err) => {
        //         console.log('Could not import preview image: ' + err);
        //     });
    }
}

export default Product;
