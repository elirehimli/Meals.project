import React from "react"
import { useState } from "react"
import "./Recipe.css"
import { GiDoubleFish } from "react-icons/gi"
import { GiMeat } from "react-icons/gi"
import { FaCandyCane } from "react-icons/fa"  
import { FaFeatherAlt } from "react-icons/fa"
import { FaPastafarianism } from "react-icons/fa"
import { GoCheck } from "react-icons/go"
import fish from "../Img/fish.jpg"
import meat from "../Img/meat.jpg"
import dessert from "../Img/dessert.jpg"
import vegetable from "../Img/vegetable.jpg"
import pastas from "../Img/pastas.jpg"
import 'antd/dist/antd.css'
import { Rate } from 'antd'
function Recipe() {
    const fishProducts = {title:"Garlic Butter Fish",img:fish}
    const meatProducts = {title:"Minute Egg on Creamy Polenta with Crispy",img:meat}
    const dessertProducts = {title:"Taste Lime Slime Garnished",img:dessert}
    const vegetableProducts = {title:"Crab Appetizer Dish",img:vegetable}
    const pastasProducts ={title:"Brooke's Best Bombshell Brownies",img:pastas}

    const [state, setState] = useState(fishProducts);   
  return (
      <div className="container">
        <div className="recipe">
            <div id="recipe-icon-title" onClick={()=>setState(fishProducts)}>
                <div className="icon-center">
                    <h2><GiDoubleFish className="recipe-icon" /></h2>
                </div>
                <span className="tooltiptext">Fish</span>
            </div>
            <div id="recipe-icon-title" onClick={()=>setState(meatProducts)}>
                <div className="icon-center">
                    <GiMeat className="recipe-icon" />
                </div>
                <span className="tooltiptext">Meat</span>
            </div>
            <div id="recipe-icon-title" onClick={()=>setState(dessertProducts)}>
                <div className="icon-center">
                    <FaCandyCane className="recipe-icon" />
                </div>
                <span className="tooltiptext">Dessert</span>
            </div>
            <div id="recipe-icon-title" onClick={()=>setState(vegetableProducts)}>
                <div className="icon-center">
                    <FaFeatherAlt className="recipe-icon" />
                </div>
                <span className="tooltiptext">Vegetable</span>
            </div>
            <div id="recipe-icon-title" onClick={()=>setState(pastasProducts)}>
                <div className="icon-center">
                    <FaPastafarianism className="recipe-icon" />
                </div>
                <span className="tooltiptext">Pastas</span>
            </div>
        </div>
        <div className="recipeAns">
            <div className="recipe-title">
                <h2>{state.title}</h2>
                <Rate defaultValue={3} />
                <p><span style={{fontWeight:"700"}}>Recipe by:</span> James Smith</p>
                <h3>Ingredients</h3>
                <div className="check">
                    <div className="check-title">
                        <h4><GoCheck className="check-icon" />1 tsp. granulated sugar</h4>
                        <h4><GoCheck className="check-icon"/>Black pepper</h4>
                        <h4><GoCheck className="check-icon"/>1/2 small red onion</h4>
                    </div>
                    <div className="check-title">
                        <h4><GoCheck className="check-icon"/>5 cloves garlic</h4>
                        <h4><GoCheck className="check-icon"/>1 cup butter, melted</h4>
                        <h4><GoCheck className="check-icon"/>Thinly sliced</h4>
                    </div>
                </div>
                <div className="check-btn">
                    <button type="submit">I MADE IT!</button>
                </div>
            </div>
            <div className="recipe-img">
                <img src={state.img} />
            </div>
        </div>
    </div>
  );
}

export default Recipe;
