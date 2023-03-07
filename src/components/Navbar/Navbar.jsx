import React, { useContext } from "react";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";

const Navbar = () => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const { redirectDetailsRouter } = context;

  const handleClickHome = () => {
    navigate(`${redirectDetailsRouter}/`);
  };
  const handleClickAbout = () => {
    navigate(`${redirectDetailsRouter}/about`);
  };

  return (
    <div className="container">
      <div className="navbar">
        <button className="navbar__home" onClick={handleClickHome}>
          Home
        </button>
        <button className="navbar__about" onClick={handleClickAbout}>
          About me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
