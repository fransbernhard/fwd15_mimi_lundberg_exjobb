import React from 'react';

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

const Category = ({ active, handleClick, category }) =>  (
    <li
        className={active ? 'category active' : 'category inActive'}
        onClick={handleClick}
    >
        <button className="btn">
            {category}
        </button>
    </li>
)

export default CategoryContainer;
