import React from "react";
import "./product-details.scss";

const ProductDetails = ({ id, title, image, price }) => {
  return (
    <div className="detail">
      <div className="detail__title">
        <h2>{title}</h2>
      </div>
      <div className="detail__price">
        <h2>{price}</h2>
      </div>
      <div className="detail__image">
        <img src={image} alt="product-photography" />
      </div>
    </div>
  );
};

export default ProductDetails;
