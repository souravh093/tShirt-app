import React from 'react';

const Products = ({tShirt}) => {
    const {name} = tShirt;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Products;