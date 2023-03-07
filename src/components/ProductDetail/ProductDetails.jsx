import React from "react";
import "./product-details.scss";

const ProductDetails = ({
  id,
  title,
  image,
  price,
  description,
  category,
  rate,
  count,
}) => {
  return (
    <div className="detail">
      <div className="detail__image">
        <img src={image} alt="product-photography" />
      </div>

      <div className="detail__text">
        <h2>
          <b>Producto:</b> {title}
        </h2>
        <p>
          <b>Description:</b> {description}
        </p>
        <p>
          <b>Category:</b> {category}
        </p>
        <p>
          <b>Price:</b> {price}$
        </p>
        <div className="rating">
          <p>
            <b>rate:</b> {rate}
          </p>
          <p>
            <b>count:</b> {count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
