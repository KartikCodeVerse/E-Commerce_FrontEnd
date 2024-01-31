import React, { useContext } from "react";
import "./cart.css";
import CartItems from "../Components/CartItems/CartItems";

const Cart = () => {
  
  return (
    <div className="cart">
      <CartItems />
    </div>
  );
};

export default Cart;
