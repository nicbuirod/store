import React, { useContext } from "react";
import "./product-list.scss";
import Product from "./Product/ProductCard";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";

const ProductList = ({ products }) => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const { redirectDetailsRouter } = context;

  const goToDetails = (id) => {
    navigate(`${redirectDetailsRouter}/${id}`);
  };

  return (
    <div className="list">
      {products.map(({ id, title, image }, index) => {
        return (
          <Product
            key={index}
            title={title}
            image={image}
            id={id}
            handleClick={goToDetails}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
