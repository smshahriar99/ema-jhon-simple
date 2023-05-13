import React, { useEffect, useState } from "react";
import "./Review.css";
import fakeData from "../../fakeData/products.json";
import ReviewProduct from "./ReviewProduct/ReviewProduct";
import Cart from "../Shop/Cart/Cart";
import { getShoppingCart } from "../../utilities/fakedb";
import { removeFromDb } from "../../utilities/fakedb";
import { deleteShoppingCart } from "../../utilities/fakedb";
import happyImage from "../../images/giphy.gif";
const Review = () => {
  const [cart, setCart] = useState([]);
  const removeProduct = (id) => {
    const newCart = cart.filter((pd) => pd.id != id);
    setCart(newCart);
    removeFromDb(id);
  };
  const [placeOrder, setPlaceOrder] = useState(false);
  const handlePlaceOrder = () => {
    setCart([]);
    setPlaceOrder(true);
    deleteShoppingCart();
  };
  let thankyou;
  if (placeOrder) {
    thankyou = <img src={happyImage} alt="" />;
  }
  useEffect(() => {
    const savedCart = getShoppingCart();
    const productKeys = Object.keys(savedCart);
    const cartProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.id === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProduct);
  }, []);
  return (
    <div>
      {/* <h2>Review {cart.length}</h2> */}
      <div className="reviewProduct">
        {cart.map((pd) => (
          <ReviewProduct
            removeProduct={removeProduct}
            product={pd}
          ></ReviewProduct>
        ))}
        {thankyou}
      </div>
      <div>
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder}>Place your order</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
