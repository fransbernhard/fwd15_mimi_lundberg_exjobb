import React from 'react';

import Category from './Category';

const CategoryContainer = ({ activeIndex, products, filterHandler }) => {
    const categories = [...new Set(products.map(prod => prod.catName))];

    return (
        <ul className="filterList">
            {categories.map((cat, index) =>
                <Category
                    key={index}
                    category={cat}
                    active={index === activeIndex}
                    handleClick={() => filterHandler(cat, index)}
                />
            )}
        </ul>
    )
}

export default CategoryContainer;
