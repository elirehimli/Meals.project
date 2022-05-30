import React from "react";
import Header2 from "../Header2/Header2";
import "./ChefList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
function ChefList() {
  const [chef, setChef] = useState([]);
  const [limit, setLimit] = useState(3)
  const [loading,setLoading] = useState("")
  const [spinloading,setSpinLoading] = useState(true)
  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/Resulzadeemin/chefList/chefList")
      .then((response) => {setChef(response.data);setSpinLoading(false)})
      .catch((error) => {alert("connect problem..");});
  });
  const loadmore = () => {
      setLoading(true)
      setTimeout(() => {
        setLimit(limit + 3);setLoading(false)
      }, 1000);
  }
  const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;
  return (
    <div>
      <Header2 />
      {spinloading ? <div className="spinload"><Spin /></div> :
        <div className="container">
          <div className="cheflist">
            {chef.slice(0,limit).map((e) => {
              return (
                <Link key={e.id} to={`chefabout/${e.id}`}>
                  <div className="chefslist">
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
            })}
          </div>
        <div className="chefList-btn">
            {
                limit < chef.length &&
                <button onClick={loadmore}>
                    {loading && <span>Loading..<Spin indicator={antIcon} /></span>}
                    {!loading && <span>Load More</span>}
                </button>
            }
        </div>
      </div>
      }
    </div>
  );
}

export default ChefList;
