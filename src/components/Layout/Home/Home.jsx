import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from './Products/Products';

const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div>
            {
                tShirts.map(tShirt => <Products tShirt={tShirt} key={tShirt._id}/>)
            }
        </div>
    );
};

export default Home;