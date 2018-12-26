import React, { Component } from 'react';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ProductContainer from '../components/ProductContainer';
import CategoryContainer from '../components/CategoryContainer';

class Archive extends Component {
    state = {
        products: [],
        category: "",
        activeIndex: 3
    }

    filterHandler = (category, index) => {
        this.setState({
            category,
            activeIndex: index
        })
    }

    componentDidMount(){
        const myInit = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        };

        // fetch("./php/products.php", myInit)
        fetch("/getProducts", myInit)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ products: data });
            }).catch(function(err) {
                console.log('Error cannot get products: ' + err.message);
            });
    }

    render() {
        const {category, activeIndex, products} = this.state;

        return (
            <div>
                <Menu/>
                <div className="archive-container" id="archive">
                    <div className="archive-wrapper">
                        <CategoryContainer
                            filterHandler={this.filterHandler}
                            products={products}
                            activeIndex={activeIndex}
                        />
                        <br/><br/>
                        <ProductContainer
                            products={category.length
                                ? products.filter((prod) => prod.catName === category)
                                : products.filter((prod) => prod.catName === 'Places')
                            }
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Archive;
