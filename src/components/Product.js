import React, { PureComponent } from 'react';
import Modal from 'react-modal';

const modalStyle = {
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
        thumbnail: "",
        modalImage: ""
    }

    componentDidMount() {
        import(`../assets/images/${this.props.product.thumbnail}`)
            .then(thumbnail => {
                console.log(thumbnail);
                this.setState({
                    thumbnail
                })
            }).catch(err => {
                console.log('Error importing thumbnail: ' + err);
            })

        import(`../assets/images/${this.props.product.previewImg}`)
            .then(modalImage => this.setState({
                    modalImage
                })
            ).catch((err) => {
                console.log('Error importing modal image: ' + err);
            });
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

    addContainerClass = categoryName => {
        return (categoryName === 'Places')
            ? 'hvr-sink placesBoxClass'
            : 'hvr-sink productBoxClass'
    }

    componentWillMount() {
        Modal.setAppElement('body')
    }

    render(){
        const { thumbnail, modalImage, modalIsOpen } = this.state;
        const { product } = this.props;

        thumbnail && console.log("THUMBNAIL: ", thumbnail);
        modalImage && console.log("MODAL: ", modalImage);

        const thumbnailBackground = thumbnail && { backgroundImage: 'url(' + thumbnail + ')'}

        const categoryName = product.catName;

        const thumbnailImage = thumbnail && categoryName === 'Places'
            ? <div className={this.addClasses(categoryName)} style={thumbnailBackground}/>
            : <img className={this.addClasses(categoryName)} alt={product.name} src={thumbnail} />

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
                <div className={this.addContainerClass(product.catName)} onClick={this.openModal}>
                    {thumbnailImage}
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
                    style={modalStyle}
                    contentLabel="Modal"
                >
                    <div className="modal-box">
                        <div className="close" onClick={this.closeModal}>x</div>
                        <img src={modalImage}/>
                        {modalName}
                        {modalDescription}
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Product;
