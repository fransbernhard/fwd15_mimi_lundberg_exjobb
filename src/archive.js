import React, { Component } from 'react';

// Component import
import Menu from './components/menu';
import Footer from './components/footer';
import ProductItem from "./productItem";
import CategoryItem from './components/categoryItem';

// Map through Archives this.state array "products" and create a ProductItem component for every object. "Key" property is to use a string that uniquely identifies a list item among its siblings (product.id)
class ProductContainer extends React.Component {
  render(){
    return (
      <div>
        <div className="prodContainer">{
          this.props.products.map(product => <ProductItem product={product} key={product.id} />)}
        </div>
      </div>
    );
  };
};

class CategoryContainer extends React.Component {

  render(){
    // 1. "Set objects" are a collections of unique values. "...new Set" saves every unique category (in products.categories) in the const "categories".
    const categories = [...new Set(this.props.products.map(cat => cat.category))];
    // 2. Map over const "categories". For every cat in "categories" => Create CategoryItem component.
    // 3. CategoryItem property handleClick is triggered with onClick event. Property handleClick calls anonymous function "filterHandler" with clicked "cat" as parameter.
    // 4. Set CategoryItem[i] property category[i] and key[i] to parameter "cat[i]".
    return (
      <div>
        <ul className="filterList">{categories.map(cat => <CategoryItem handleClick={
          () => this.props.filterHandler(cat)} category={cat} key={cat} />)}
        </ul>
      </div>
    );
  };
};

class Archive extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [
        {id: 1, category: 'paint', name: 'clowd', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: '23.png', previewImg: "23.png"},
        {id: 2, category: 'paint', name: 'dålig sikt', type: 'matt emulsion/olja/akryl', stocked: true, size: '100x130', thumbnail: '24.png', previewImg: "24.png"},
        {id: 3, category: 'paint', name: 'dålig sikt', type: 'matt emulsion/olja/akryl', stocked: true, size: '100x130', thumbnail: '25.png', previewImg: "25.png"},
        {id: 4, category: 'paint', name: 'pink', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: '1.png', previewImg: "1.png"},
        {id: 5, category: 'paint', name: 'pink', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: '27.png', previewImg: "27.png"},
        {id: 6, category: 'paint', name: 'pinks', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: '2.png', previewImg: "2.png"},
        {id: 7, category: 'paint', name: 'pink', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: '3.png', previewImg: "3.png"},
        {id: 8, category: 'paint', name: 'pinks', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: '4.png', previewImg: "4.png"},
        {id: 9, category: 'paint', name: 'pinks', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: '5.png', previewImg: "5.png"},
        {id: 10, category: 'paint', name: 'strechmarks', type: 'matt emulsion/olja/akryl', stocked: true,  size: '100x130', thumbnail: '19.png', previewImg: "19.png"},
        {id: 11, category: 'paint', name: 'clowd', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: '20.png', previewImg: "20.png"},
        {id: 12, category: 'paint', name: 'dålig sikt', type: 'matt emulsion/olja/akryl', stocked: true, size: '100x130', thumbnail: '21.png', previewImg: "21.png"},
        {id: 13, category: 'paint', name: 'dålig sikt', type: 'matt emulsion/olja/akryl', stocked: true, size: '100x130', thumbnail: '22.png', previewImg: "22.png"},
        {id: 14, category: 'paint', name: 'vertical', type: 'matt emulsion', size: '100x130', stocked: false, thumbnail: 'vertical-sm.jpg', previewImg: "vertical.jpg"},
        {id: 15, category: 'paint', name: 'optics', type: 'matt emulsion/akryl', stocked: true, size: '100x150', thumbnail: 'optics-sm.jpg', previewImg: "optics.jpg"},
        {id: 16, category: 'paint', name: 'moby', type: 'matt emulsion', stocked: true,  size: '100x130', thumbnail: 'moby-sm.jpg', previewImg: "main.jpg"},
        {id: 17, category: 'paint', name: 'twink', type: 'matt emulsion/olja/akryl', stocked: true, size: '100x130', thumbnail: 'twink-sm.jpg', previewImg: "twink.jpg"},
        {id: 18, category: 'paint', name: 'käft', type: 'matt emulsion/olja/akryl', stocked: false, size: '100x130', thumbnail: 'kaft-sm.jpg', previewImg: "kaft.jpg"},
        {id: 19, category: 'paint', name: 'tvätt tid', type: 'matt emulsion/olja/akryl', stocked: false,  size: '100x130', thumbnail: 'tvatttid-sm.jpg', previewImg: "tvatttid.jpg"},
        {id: 20, category: 'paint', name: 'piotr', type: 'matt emulsion/olja/akryl', stocked: false,  size: '100x130', thumbnail: 'piotr-sm.jpg', previewImg: "piotr.jpg"},
        {id: 21, category: 'paint', name: 'stora blå', type: 'matt emulsion/olja/akryl', stocked: false,  size: '100x130', thumbnail: 'storabla-sm.jpg', previewImg: "storabla.jpg"},
        {id: 22, category: 'paint', name: 'strechmarks', type: 'matt emulsion/olja/akryl', stocked: false,  size: '100x130', thumbnail: 'strechmarks-sm.jpg', previewImg: "strechmarks.jpg"},
        {id: 23, category: 'paint', name: 'clowd', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: 'clowd-sm.jpg', previewImg: "clowd.jpg"},
        {id: 24, category: 'paint', name: 'dålig sikt', type: 'matt emulsion/olja/akryl', stocked: false, size: '100x130', thumbnail: 'daligsikt-sm.jpg', previewImg: "daligsikt.jpg"},

        {id: 25, category: 'print', name: 'MIMI | 2nd edition', type: 'akvarellppr, 70x100', limited: '30', available: '28',  price: '3,000', stocked: true,  thumbnail: 'mimisecond-sm.jpg', previewImg: "mimisecond.jpg"},
        {id: 26, category: 'print', name: 'max', type: 'uppspänd canvas, 95x120', limited: '30', available: '28',  price: '7,000', stocked: true,  thumbnail: 'max-sm.jpg', previewImg: "max.jpg"},
        {id: 27, category: 'print', name: 'elephnt', type: 'akvarellppr, 70x100', limited: '16', available: '8', price: '5,000', stocked: true,  thumbnail: 'elphnt-sm.jpg', previewImg: "elphnt.jpg"},
        {id: 28, category: 'print', name: 'dig in', type: 'plexiglas, 80x120', limited: '30', available: '28', price: '6,000', stocked: true,  thumbnail: 'digin-sm.jpg', previewImg: "digin.jpg"},
        {id: 29, category: 'print', name: 'les dames', type: 'matt fotoppr, 50x70', limited: '30', available: '28', price: '2,500', stocked: true,  thumbnail: 'lesdames-sm.jpg', previewImg: "lesdames.jpg"},
        {id: 30, category: 'print', name: 'bubblephnt', type: 'akvarellppr, 50x94', limited: '30', available: '28', price: '4,500', stocked: true,  thumbnail: 'bubblephnt-sm.jpg', previewImg: "bubblephnt.jpg"},
        {id: 31, category: 'print', name: 'checka ut', type: 'material: valfritt', size: 'strlk: valfri', price: 'pris: inte valfritt', stocked: true,  thumbnail: 'checkaut-sm.jpg', previewImg: "checkaut.jpg"},
        {id: 32, category: 'print', name: 'hybrid', type: 'akvarellppr, 70x100', limited: '16', available: '14', price: '4,000', stocked: true,  thumbnail: 'hybrid-sm.jpg', previewImg: "hybrid.jpg"},
        {id: 33, category: 'print', name: 'strössla', type: 'plexiglas, 80x120', limited: '30', available: '27', price: '5,000', stocked: true,  thumbnail: 'strossel-sm.jpg', previewImg: "strossel.jpg"},
        {id: 34, category: 'print', name: 'bellies naked skin prty - part II', type: 'matt fotoppr, 70x100', limited: '15', available: '14', price: '1,500', stocked: true,  thumbnail: 'nakedskin-sm.jpg', previewImg: "nakedskin.jpg"},
        {id: 35, category: 'print', name: 'bellies naked skin prty', type: 'matt fotoppr, 70x100', limited: '15', available: '14', price: '1,500', stocked: true,  thumbnail: 'nakedskin2-sm.jpg', previewImg: "nakedskin2.jpg"},
        {id: 36, category: 'print', name: 'gösta', type: 'valfri material & strlk', stocked: true,  thumbnail: 'gosta-sm.jpg', previewImg: "gosta.jpg"},
        {id: 37, category: 'print', name: 'petter', type: 'akvarellppr, 70x100', limited: '7', available: '5',  price: '1,500', stocked: true,  thumbnail: 'petter-sm.jpg', previewImg: "petter.jpg"},

        {id: 38, category: 'places', stocked: true, desc: 'Vernisage Strössel @ Linnégatan, sthlm 2015', thumbnail: '17.png', previewImg: "17.png"},
        {id: 39, category: 'places', stocked: true, desc: 'Max @ Nybergsgatan, sthlm 2016', thumbnail: '26.png', previewImg: "26.png"},
        {id: 40, category: 'places', stocked: true, desc: 'Elphnt @ Karlavägen, sthlm 2016', thumbnail: '6.png', previewImg: "6.png"},
        {id: 41, category: 'places', stocked: true, desc: 'Max @ Karlavägen, sthlm 2016', thumbnail: '18.png', previewImg: "18.png"},
        {id: 42, category: 'places', stocked: true, desc: 'Utställning @ Kocksgatan, sthlm 2017', thumbnail: '7.png', previewImg: "7.png"},
        {id: 43, category: 'places', stocked: true, desc: 'Dig in @ Roslagsgatan, sthlm 2015', thumbnail: '8.png', previewImg: "8.png"},
        {id: 44, category: 'places', stocked: true, desc: 'Vernisage Dålig sikt @ Riddargatan, sthlm 2016', thumbnail: '9.png', previewImg: "9.png"},
        {id: 45, category: 'places', stocked: true, desc: 'Twink @ Klippgatan, sthlm 2016', thumbnail: '10.png', previewImg: "10.png"},
        {id: 46, category: 'places', stocked: true, desc: 'Twink @ Friisgatan, malmö 2016', thumbnail: '11.png', previewImg: "11.png"},
        {id: 47, category: 'places', stocked: true, desc: 'Strössel @ Sturegatan, sthlm 2015', thumbnail: '12.png', previewImg: "12.png"},
        {id: 48, category: 'places', stocked: true, desc: 'Chili @ Nybergsgatan, sthml 2015', thumbnail: '13.png', previewImg: "13.png"},
        {id: 49, category: 'places', stocked: true, desc: 'Chili | Twink | Agnes @ Klippgatan, sthlm 2016', thumbnail: '14.png', previewImg: "14.png"},
        {id: 50, category: 'places', stocked: true, desc: 'Mimi | Dig in @ Bråvallagatan, sthlm 2016', thumbnail: '15.png', previewImg: "15.png"},
        {id: 51, category: 'places', stocked: true, desc: 'Headaches @ Sturegatan, sthlm 2015', thumbnail: '16.png', previewImg: "16.png"}
      ],
      category: ""
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  // Set state to the "cat" parameter from CatogoryItem
  filterHandler(tag){
    this.setState({
      category: tag
    })
  }

  render() {
    // 1. Render CategoryContainer with props: empty array object "categories", filterHandler function and state "product object array"
    // 2. Render ProductContainer. If this.state.category.length is true (an array) - "filter" function calls anonymous function with parameter "prod" & where prod.categories is same type and name as this.state.category, render these objects : else render all this.state.products.
    return (
      <div>
        <Menu />
        <div className="archive-container">
          <div className="archive-wrapper">
            <CategoryContainer categories={[]} filterHandler={this.filterHandler} products={this.state.products}/>
            <br/><br/>
            <ProductContainer products={this.state.category.length ? this.state.products.filter((prod) => prod.category === this.state.category) : this.state.products }/>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
};

export default Archive;
