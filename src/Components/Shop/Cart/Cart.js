import React from "react";
import "./cart.css";
const Cart = (props) => {
  const cart = props.cart;
  const price = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  let shipping = 0;
  if (price >= 1000) {
    shipping = 0;
  } else if (price > 0) {
    shipping = 100;
  }
  const tax = price / 10;
  return (
    <div className="cart">
      <h2>Order summary </h2>
      <p>Items ordered: {cart.length}</p>
      <p>Items: ${price}</p>
      <p>Shipping & Handling: ${shipping}</p>
      <p>Total before tax:$ {price + shipping}</p>
      <p>Estimated Tax: ${tax}</p>
      <h4>Order Total: ${price + shipping + tax}</h4>
      {props.children}
    </div>
  );
};

export default Cart;
