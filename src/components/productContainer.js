import React from 'react';
import Product from "../product";

const ProductContainer = ({ products }) => (
    <div className="prodContainer">
        {
            products.map(product =>
                <Product
                    key={product.itemId}
                    product={product}
                />
            )
        }
    </div>
)

export default ProductContainer;
