import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="header-content">
        <h3>100% Natural</h3>
        <h1>Chocolate Chip Cream</h1>
        <p>Many of the chips we tasted were bland and chalky,with a grainy crunch from too much sugar</p>
        <button>Book A Table</button>
      </div>
    </div>
  );
}

export default Header;
