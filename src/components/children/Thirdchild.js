import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Clock from "react-live-clock";

const Thirdchild = () => {
  let date = new Date();
  let datetoday = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let monthnow;

  if (month === 1) {
    monthnow = "Feb";
  } else if (month === 2) {
    monthnow = "Mar";
  } else if (month === 3) {
    monthnow = "Apr";
  } else if (month === 4) {
    monthnow = "May";
  } else if (month === 5) {
    monthnow = "Jun";
  } else if (month === 6) {
    monthnow = "July";
  } else if (month === 0) {
    monthnow = "Jan";
  } else if (month === 7) {
    monthnow = "Aug";
  } else if (month === 7) {
    monthnow = "Sep";
  } else if (month === 7) {
    monthnow = "Oct";
  } else if (month === 7) {
    monthnow = "Nov";
  } else if (month === 7) {
    monthnow = "Dec";
  }

  let weekday = date.getDay();
  let day;
  if (weekday === 1) {
    day = "Mon";
  } else if (weekday === 2) {
    day = "Tue";
  } else if (weekday === 3) {
    day = "Wed";
  } else if (weekday === 4) {
    day = "Thu";
  } else if (weekday === 5) {
    day = "Fri";
  } else if (weekday === 6) {
    day = "Sat";
  } else if (weekday === 0) {
    day = "Sun";
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="main">
        <div className="main-info">
          <div className="todays-weather">
            <div className="locations">
              <h3>Location</h3>
              <input type="text" placeholder="Jammu" />
            </div>
            <div className="weather-temp">
              <div className="timer">
                <Clock
                  format={"HH:mm"}
                  ticking={true}
                  timezone={"Asia/Kolkata"}
                ></Clock>
                , {day}, {monthnow} {datetoday} {year}
              </div>
              <div className="todays-weather-type">
                <div className="weathers-type">
                  <img src={require("../icons/01d.png")} alt="" />
                  <p>Clear</p>
                </div>
                <div className="forecast-temp">29.C</div>
              </div>
            </div>
            <div className="humidity">
              <div className="forecast-humidity">
                <p>Humidity</p>
                <h1>50%</h1>
              </div>
              <div className="windspeed">
                <p>Wind Speed</p>
                <h1>12Km/j</h1>
              </div>
            </div>
          </div>
         <div className="forecast-div-links">
         <div className="forecast-div">
            <div className="graph"></div>
          </div>
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
         </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Thirdchild;
