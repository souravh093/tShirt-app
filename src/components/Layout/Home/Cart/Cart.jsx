import React from 'react';

const Cart = ({cart, removeFromCart}) => {
    return (
        <div className='pt-10 px-2 sticky top-0 bg-gray-200 h-screen'>
            <h1 className='text-2xl font-semibold mb-3 text-center'>Order Summary</h1>
            {
                cart.map(c => 
                <div className='bg-gray-50 mb-3 p-2 flex items-center rounded-md justify-between text-black' key={c._id}>{c.name}<button onClick={() => removeFromCart(c._id)} className='btn btn-xs'>X</button></div>
                )
            }
        </div>
    );
};

export default Cart;