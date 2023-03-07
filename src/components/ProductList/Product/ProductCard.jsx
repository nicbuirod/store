import React, { useState } from "react";
import Countdown from "react-countdown";
import "./product.scss";

const Product = ({ id, title, image, handleClick }) => {
  const [disabled, setDisabled] = useState(false);
  const Timer = () => {
    const time = Math.floor(Math.random() * 5) * (60000 - 10000) + 10000;

    const Finish = () => {
      setDisabled(true);
    };
    const finish = ({ hours, minutes, seconds, completed }) => {
      console.log("completed", completed);
      if (completed) {
        //setDisabled(true);
        return <Finish />;
      } else if (disabled === false) {
        //setDisabled(false);
        return (
          <span>
            0{hours}:0{minutes}:{String(seconds).padStart(2, "0")}
          </span>
        );
      }
    };

    return (
      <div>
        <Countdown date={Date.now() + time} renderer={finish}></Countdown>
      </div>
    );
  };
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
        <Timer />
        <button onClick={redirect} disabled={disabled}>
          Go to Detail
        </button>
      </div>
    </div>
  );
};

export default Product;
