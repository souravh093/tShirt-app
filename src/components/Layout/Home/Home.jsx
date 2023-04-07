import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirt) => {
    const existingCart = cart.find(ts => ts._id === tShirt._id)
    if (existingCart) {
        Swal.fire({
            title: 'Your have already added',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }else{
        setCart([...cart, tShirt]);
    }
  }

  const removeFromCart = (id) => {
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining);
  }

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-5 p-10">
        {tShirts.map((tShirt) => (
          <Products handleAddToCart={handleAddToCart} tShirt={tShirt} key={tShirt._id} />
        ))}
      </div>
      <div className="col-span-1">
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default Home;
