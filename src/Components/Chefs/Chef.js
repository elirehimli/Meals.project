import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "./Chef.css";
function Chef() {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/Resulzadeemin/chefList/chefList")
      .then((response) => setChef(response.data))
      .catch((error) => {alert("connect problem..");});
  });
  return (
    <div className="chef">
      {
        chef.slice(0,3).map(
            (e) => {return (
                <Link key={e.id} to={`chefabout/${e.id}`}>
                    <div className="chefs">
                        <div className="chefs-imgs">
                            <img src={e.url} />
                        </div>
                        <div className="chefs-content">
                            <h4>{e.recips} Recips</h4>
                            <h2>{e.name}</h2>
                        </div>
                    </div>
              </Link>
            );
        })
      }
    </div>
  );
}

export default Chef;
