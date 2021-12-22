import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = ({ setSearch }) => {
  const cartItems = useSelector((state) => state.productReducer.cart);
  return (
    <div className="NavBar">
      <Link className="logo" to="/">
        myReduxApp
      </Link>
      <input
        className="search"
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search Here.."
      />
      <button className="srch-btn">Search</button>
      <Link className="cart-anchor" to="/cart">
        Cart: <span style={{ color: "#EFA500" }}>{cartItems.length}</span>{" "}
      </Link>
    </div>
  );
};

export default NavBar;
