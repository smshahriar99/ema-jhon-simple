import React from "react";
import logo from "../../images/Logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="manage">Manage Inventory Here</a>
      </nav>
    </div>
  );
};

export default Header;
