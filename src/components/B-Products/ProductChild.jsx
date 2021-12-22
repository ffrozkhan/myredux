import React from "react";
import "./Redux.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductChild = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cards">
      <img
        className="image"
        height="250px"
        width="250px"
        src={item.image}
        alt=""
      />
      <h3>{item.title.substr(0, 20) + ".."}</h3>
      <h4>Price: ${item.price}</h4>
      <button
        className="add-cart"
        onClick={() => dispatch({ type: "Add-Cart", data: item })}
      >
        Add To Cart
      </button>
      <Link to="/details">
        <button
          className="view-details"
          onClick={() => dispatch({ type: "Selected-Product", data: item })}
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductChild;
