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
      <div className="details-parent">
        <div className="product-image-div">
          <img className="product-image" src={selectedItem.image} alt="" />
        </div>
        <div className="product-content">
          <h3>{selectedItem.title}</h3>
          <h4>Price: ${selectedItem.price}</h4>
          <span>
            <b>Category: {selectedItem.category}</b>
          </span>
          <p style={{ width: "400px" }}>{selectedItem.description}</p>
          <button
            className="add-cart"
            onClick={() => dispatch({ type: "Add-Cart", data: selectedItem })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
