import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData/products.json";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [produts, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getShoppingCart();
    const key = Object.keys(savedCart);
    const previousCart = key.map((id) => {
      const product = fakeData.find((pd) => pd.id === id);
      product.quantity = savedCart[id];
      return product;
    });
    setCart(previousCart);
    console.log(previousCart);

    // const savedCart = product.id;
  }, []);
  const handleAddProduct = (props) => {
    const toBeAdded = props.id;
    const sameProduct = cart.find((pd) => pd.id == toBeAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.id != toBeAdded);
      newCart = [...others, sameProduct];
      setCart(newCart);
    } else {
      props.quantity = 1;
      newCart = [...cart, props];
      setCart(newCart);
    }
    addToDb(props.id);
  };
  return (
    <div>
      <product className="product">
        {produts.map((product) => (
          <Product
            product={product}
            showAddToCart={true}
            key={product.id}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </product>
      <Cart className="cart" cart={cart}>
        <a href="/review">
          <button>Review your order</button>
        </a>
      </Cart>
    </div>
  );
};

export default Shop;
