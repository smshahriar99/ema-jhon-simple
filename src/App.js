import React from "react";
import "./App.css";
//import Switch from "react-dom";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import Error from "./Components/Error/Error";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/manage" element={<Inventory />} />
          <Route exact path="/" element={<Shop />} />
          <Route path="product/:productKey" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
