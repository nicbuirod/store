import React from "react";
import "./product.scss";

const Product = ({ id, title, image, handleClick }) => {
  const redirect = () => {
    handleClick(id);
  };
  return (
    <div className="product">
      <div className="product__img">
        <img src={image} alt="product" className="product__img__image" />
        <h2 className="product__img__text">{title}</h2>
      </div>
      <div className="product__details">
        <button onClick={redirect}>Go to Detail</button>
      </div>
    </div>
  );
};

export default Product;
