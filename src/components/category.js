import React from 'react';

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

export default Category;
