import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { img, name, seller, price, stock, ratings, id } = props.product;
  const showBtn = props.showAddToCart;
  //console.log(props.product);
  return (
    <div className="main">
      <image className="image">
        <img src={img} alt="" />
      </image>
      <data className="data">
        <Link to={"/product/" + id}>
          {" "}
          <h2>{name}</h2>
        </Link>
        <ls className="ls">
          <h5>by: {seller}</h5>
          <h2>{price}$</h2>
          <h5>only {stock} left in stock - order soon</h5>
          {showBtn && (
            <button
              onClick={() => {
                props.handleAddProduct(props.product);
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Add to cart
            </button>
          )}
        </ls>
        <rs className="rs">
          <h4>rating {ratings}</h4>
          <h2>Features</h2>
        </rs>
      </data>
    </div>
  );
};

export default Product;
