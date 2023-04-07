import React from 'react';

const Products = ({tShirt, handleAddToCart}) => {
    const {name, price, picture, gender} = tShirt;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure><img src={picture} className='h-96' alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price: ${price}</p>
            <p>Gender: {gender}</p>
            <button onClick={() => handleAddToCart(tShirt)} className="btn btn-primary">Buy Now</button>
        </div>
        </div>
    );
};

export default Products;