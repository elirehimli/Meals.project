import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./Slider.css";
import menu1 from "../Img/menu-1.jpg";
import menu2 from "../Img/menu-2.jpg";
import menu3 from "../Img/menu-3.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
function Slider() {
  const contentStyle = {
    width: "300px",
    margin: "0 auto",
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#fff",
  };
  return (
    <div className="slider">
      <Carousel autoplay>
        <div className="menu-1-content">
          <div className="menu-1">
            <h3 style={contentStyle}>
              <img src={menu1} />
            </h3>
          </div>
          <div className="menu-1-top">
            <a target="_blank" href="#">
              Sesame Honey Roasted
              <MdKeyboardArrowRight className="menu-1-icon" />
            </a>
          </div>
        </div>
        <div className="menu-2-content">
          <div className="menu-1">
            <h3 style={contentStyle}>
              <img src={menu2} />
            </h3>
          </div>
          <div className="menu-1-top">
            <a target="_blank" href="#">
              Chicken Reshmi Kabab
              <MdKeyboardArrowRight className="menu-2-icon" />
            </a>
          </div>
        </div>
        <div className="menu-3-content">
          <div className="menu-1">
            <h3 style={contentStyle}>
              <img src={menu3} />
            </h3>
          </div>
          <div className="menu-1-top">
            <a target="_blank" href="#">
              Haak-Kashmiri Spinach
              <MdKeyboardArrowRight className="menu-3-icon" />
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
