import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Secondchild = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="forecast-divs">
        <Link to="/Forecast/1">
          <div className="forecast-days">
            <h1>24 Nov</h1>
            <img src={require("../icons/04d.png")} alt="" />
            <div className="forecast-humidity">
              <p>Humidity</p>
              <h1>34%</h1>
            </div>
          </div>
        </Link>
        <Link to="/Forecast/2">
          <div className="forecast-days">
            <h1>24 Nov</h1>
            <img src={require("../icons/04d.png")} alt="" />
            <div className="forecast-humidity">
              <p>Humidity</p>
              <h1>34%</h1>
            </div>
          </div>
        </Link>
        <Link to="/Forecast/3">
          <div className="forecast-days">
            <h1>24 Nov</h1>
            <img src={require("../icons/04d.png")} alt="" />
            <div className="forecast-humidity">
              <p>Humidity</p>
              <h1>34%</h1>
            </div>
          </div>
        </Link>
        <Link to="/Forecast/4">
          <div className="forecast-days">
            <h1>24 Nov</h1>
            <img src={require("../icons/04d.png")} alt="" />
            <div className="forecast-humidity">
              <p>Humidity</p>
              <h1>34%</h1>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Secondchild;
