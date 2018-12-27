import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';

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
            .then(thumbnail =>
                this.setState({
                    thumbnail
                })
            ).catch(err => {
                console.log('Error importing thumbnail: ' + err)
            })

        import(`../assets/images/${this.props.product.previewImg}`)
            .then(modalImage =>
                this.setState({
                    modalImage
                })
            ).catch((err) => {
                console.log('Error importing modal image: ' + err)
            })
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

    componentWillMount() {
        Modal.setAppElement('body')
    }

    render(){
        const { thumbnail, modalImage, modalIsOpen } = this.state;
        const { product } = this.props;

        const containerClass = classNames(
            'hvr-sink',
            {'placesBoxClass': product.catName === 'Places'},
            {'productBoxClass': product.catName !== 'Places'}
        );

        const thumbnailClass = classNames(
            {'placesImgClass': product.catName === 'Places'},
            {'productImgClass': product.catName !== 'Places'}
        );

        const thumbnailImage = thumbnail && product.catName === 'Places'
            ? <div className={thumbnailClass} style={{ backgroundImage: 'url(' + thumbnail.default + ')' }}/>
            : <img className={thumbnailClass} alt={product.name} src={thumbnail.default} />

        const name = parseInt(product.stocked)
            ? <h3>{product.name}</h3>
            : <h3>{product.name} - SÅLD</h3>;

        const modalName = product.name
            && <h2><a className="modalDesc" href="mailto:magdamargaretha@gmail.com?subject=Fri!%20Fri!%20Fri!&body=Innan%20du%20skriver%20vill%20jag%20bara%20säga%20hej.%20Hej">{product.name}</a></h2>

        return (
            <div>
                <div className={containerClass} onClick={this.openModal}>
                    {thumbnailImage}
                    {name}
                    {product.type && <p>{product.type}</p>}
                    {product.limited && <p>begränsad upplaga: {product.limited} ex</p>}
                    {product.available && <p>tillgängliga: {product.available} ex</p>}
                    {product.size && <p>{product.size} cm</p>}
                    {product.price && <p>{product.price} kr</p>}
                    {product.desc && <p>{product.desc}</p>}
                    {product.modalDesc && <p>{product.modalDesc}</p>}
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={this.closeModal}
                    style={modalStyle}
                    contentLabel="Modal"
                >
                    <div className="modal-box">
                        <div className="close" onClick={this.closeModal}>&times;</div>
                        <img src={modalImage.default}/>
                        {modalName}
                        {product.modalDesc && <h2>{product.modalDesc}</h2>}
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Product;
