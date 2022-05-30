import React from "react";
import { GiMeat } from "react-icons/gi";
import { MdOutlineBakeryDining } from "react-icons/md";
import { FiFeather } from "react-icons/fi";
import { GiCheeseWedge } from "react-icons/gi";
import "./Card.css";
function Card() {
  return (
    <div className="container">
      <div className="card-flex">
        <div className="cardTop">
          <div className="card">
            <div className="card-content">
              <GiMeat className="icon-1" />
              <h2>Meats</h2>
            </div>
          </div>
        </div>
        <div className="cardTop">
          <div className="card">
            <div className="card-content">
              <MdOutlineBakeryDining className="icon-1" />
              <h2>Bakery</h2>
            </div>
          </div>
        </div>
        <div className="cardTop">
          <div className="card">
            <div className="card-content">
              <FiFeather className="icon-1" />
              <h2>Vegetables</h2>
            </div>
          </div>
        </div>
        <div className="cardTop">
          <div className="card">
            <div className="card-content">
              <GiCheeseWedge className="icon-1" />
              <h2>Cheese</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
