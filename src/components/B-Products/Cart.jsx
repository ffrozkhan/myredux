import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Redux.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productReducer.cart);
  console.log("cart ->", cartItems);
  return (
    <div>
      <h2>Cart</h2>
      <div className="cards-parent">
        {cartItems.map((item) => {
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
                className="remove-cart"
                onClick={() => dispatch({ type: "Remove-Product", data: item })}
              >
                Remove
              </button>
              <Link to="/details">
                <button
                  className="view-details"
                  onClick={() =>
                    dispatch({ type: "Selected-Product", data: item })
                  }
                >
                  View Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
