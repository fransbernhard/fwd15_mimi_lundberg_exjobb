/*global $:true*/

import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ProductContainer from './ProductContainer';
import CategoryContainer from './CategoryContainer';

class Archive extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            category: "",
            activeIndex: 3
        }
        this.filterHandler = this.filterHandler.bind(this);
    }

    filterHandler(cat, index){
        this.setState({
            category: cat,
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
        return (
            <div>
                <Menu />
                <div className="archive-container" id="archive">
                    <div className="archive-wrapper">
                        <CategoryContainer
                            filterHandler={this.filterHandler}
                            products={this.state.products}
                            activeIndex={this.state.activeIndex}
                        />
                        <br/><br/>
                        <ProductContainer
                            products={this.state.category.length
                                ? this.state.products.filter((prod) => prod.catName === this.state.category)
                                : this.state.products.filter((prod) => prod.catName === 'Places')
                            }
                        />
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
};

export default Archive;
