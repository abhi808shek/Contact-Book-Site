import React from "react";
import "./styles/navbar.css";
import rightSideImg from "./views/rightSideImg.png";
import leftSideImg from "./views/leftSideImg.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-heading-box">
          <div className="navbar-leftSide-img">
            <img src={leftSideImg} className="navbar-img-style" alt="" />
          </div>
          <div className="navbar-title-box">
            <NavLink to="/" style={{textDecoration:"none",color:"black"}}>
              <h1>
                <span className="text-font-capital">C</span>ontact &nbsp;
                <span className="text-font-capital">B</span>ook
              </h1>
            </NavLink>
          </div>
          <div className="navbar-rightSide-img">
            <img src={rightSideImg} className="navbar-img-style" alt="" />
          </div>
        </div>
        <div className="navbar-line-box">
          <div className="lineBox-innerContent"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
