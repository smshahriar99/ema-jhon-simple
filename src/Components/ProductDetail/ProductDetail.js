import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData/products.json";
import Product from "../Shop/Product/Product";
const ProductDetail = () => {
  const { productKey } = useParams();
  const product = fakeData.find((pd) => pd.id === productKey);
  return (
    <div>
      <h2>Product Detail</h2>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
