import React from "react";

const ReviewProduct = (props) => {
  const { name, price, seller, quantity, id } = props.product;
  return (
    <div className="main">
      <data className="data">
        <h2>{name}</h2>

        <ls className="ls">
          <h2>{price}$</h2>
          <h5>by: {seller}</h5>
          <h5>Quantity: {quantity}</h5>
          <button
            onClick={() => {
              props.removeProduct(id);
            }}
          >
            Remove to cart
          </button>
        </ls>
        <rs className="rs">
          <h4>rating </h4>
          <h2>Features</h2>
        </rs>
      </data>
    </div>
  );
};

export default ReviewProduct;
