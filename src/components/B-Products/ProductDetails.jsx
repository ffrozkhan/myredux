import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Redux.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(
    (state) => state.productReducer.selectedProduct[0]
  );
  return (
    <div>
      <h1>Product Details</h1>
      <div className="cards">
        <img
          className="image"
          height="250px"
          width="250px"
          src={selectedItem.image}
          alt=""
        />
        <h3>{selectedItem.title.substr(0, 20) + ".."}</h3>
        <h4>Price: ${selectedItem.price}</h4>
        <button
          className="add-cart"
          onClick={() => dispatch({ type: "Add-Cart", data: selectedItem })}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
