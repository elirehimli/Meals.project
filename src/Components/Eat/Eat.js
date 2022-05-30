import React from "react";
import eat from "../Img/eat.jpg";
import "./Eat.css";
import { useState } from "react";
function Eat() {
  const [text, setText] = useState("");
  const openText = () => {
      setText(!text)
  }
  return (
    <div className="container">
      <div className="eat">
        <div className="eat-img">
          <img src={eat} />
        </div>
        <div className="eat-content">
          <h2>Chicken Kebabs with Roasted Red Onions.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ratione
            optio nulla illum, eius dolor maiores Lorem ipsum dolor sit amEa
            ratione optio nullaius dolor maiores et, cnulla illum, eius dolor
            maiores Lorem ipsumonsectetur adipisicing elit,
            {
                text ? <span>ratione optio nulla illum, eius dolor maiores 
                Lorem ipsum dolor sit amEa nullaius dolor maiores et, cnulla illum, eius dolor!</span>:null
            }
          </p>
          <button onClick={openText} type="submit">{text ? <>SHOW LESS</> : <>LEARN MORE</>}</button>
        </div>
      </div>
    </div>
  );
}

export default Eat;
