import React from "react";
import Recipe from "../Recipe/Recipe";
import "./Section4.css";
import recipe1 from "../Img/recipe-1.jpg";
import recipe2 from "../Img/recipe-2.jpg";
import recipe3 from "../Img/recipe-3.jpg";
import recipe4 from "../Img/recipe-4.jpg";
function Section4() {
  return (
    <div className="container">
      <div className="section-4">
        <h3>What you Like in</h3>
        <h2>DELICIOUS RECIPE</h2>
      </div>
      <Recipe />

      <div className="recipeby-display">
        <div className="recipeby">
          <img src={recipe1} />
          <h2>Baked Pastas That Are Crazy</h2>
          <h4>
            By <span>Gabriel Jakson</span>
          </h4>
        </div>

        <div className="recipeby">
          <img src={recipe2} />
          <h2>Cream Filled Yellow Cake</h2>
          <h4>
            By <span>Fredrieck William</span>
          </h4>
        </div>

        <div className="recipeby">
          <img src={recipe3} />
          <h2>Hummingbird Cake Recipy</h2>
          <h4>
            By <span>Gino D'Acampo</span>
          </h4>
        </div>

        <div className="recipeby">
          <img src={recipe4} />
          <h2>The Perfect Chocolate Cake</h2>
          <h4>
            By <span>Gino D'Acampo</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Section4;
