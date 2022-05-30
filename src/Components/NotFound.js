import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function NotFound() {
  return (
    <div>
      <Navbar />
      <div style={{textAlign:"center"}}>
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link to="/">Back to the homepage...</Link>
      </div>
    </div>
  );
}

export default NotFound;
