import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios"
import Clock from "react-live-clock"

const Firstchild = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [lonres, setLonres] = useState("");
  const [latres, setLatres] = useState("");
  const [cityName, setCityName] = useState("");
  const [weather1, setWeather1] = useState("");
  const [weather2, setWeather2] = useState("");
  const [weather3, setWeather3] = useState("");
  const [weather4, setWeather4] = useState("");
  const [wind1, setWind1] = useState("");
  const [temperature1, setTemperature1] = useState(" ");
  const [feels1, setFeels1] = useState("");
  const [hum1, setHum1] = useState("");
  const [hum2, setHum2] = useState("");
  const [hum3, setHum3] = useState("");
  const [hum4, setHum4] = useState("");

  
  useEffect(() => {
    const savePositionToState = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };
   
     const fetchWeather = async () => {
      try {
        await window.navigator.geolocation.getCurrentPosition(
          savePositionToState
        );
        const res = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=47e12ffc739f91cc0f184d94f100dd86`
        );
        
        setCityName(res.data.city.name);
        setTemperature1(res.data.list[1].main.temp);
        setWind1(res.data.list[4].wind.speed)
        setFeels1(res.data[0].list[4].main.feels_like);
        setWeather1(res.data[0].list[4].weather[0].main)
        setWeather2(res.data[0].list[12].weather[0].main)
        setWeather3(res.data.list[20].weather[0].main)
        setWeather4(res.data.list[28].weather[0].main)
        setHum1(res.data.list[4].main.humidity)
        setHum2(res.data.list[12].main.humidity)
        setHum3(res.data.list[20].main.humidity)
        setHum4(res.data.list[28].main.humidity)
        setLonres(res.data.city.lon)
        setLatres(res.data.city.lat)
  
        console.log(res.data);
  
      } catch (err) {
        console.error(err);
      }
    };
    fetchWeather();
  }, [latitude, longitude]);
  let date = new Date();
  let datetoday = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let second = date.getSeconds();
  let monthnow;

  let dateone = datetoday + 1 ;
  let datetwo = datetoday + 2 ;
  let datethree = datetoday + 3;
  let datefour = datetoday + 4;

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


 
  let src2;
  if(weather1 === "Clouds"){
    src2 = require("../icons/04d.png");
  }
  else if (weather1 === "Clear"){
    src2 = require("../icons/01d.png");
  }
  else if (weather1 === "Snow"){
    src2 = require("../icons/13d.png");
  }
  else if (weather1 === "Extreme"){
    src2 = require("../icons/11d.png");
  }
  else if (weather1 === "Rain"){
    src2 = require("../icons/09d.png");
  }
  let src3;
  if(weather2 === "Clouds"){
    src3 = require("../icons/04d.png");
  }
  else if (weather2 === "Clear"){
    src3 = require("../icons/01d.png");
  }
  else if (weather2 === "Snow"){
    src3 = require("../icons/13d.png");
  }
  else if (weather2 === "Extreme"){
    src3 = require("../icons/11d.png");
  }
  else if (weather2 === "Rain"){
    src3 = require("../icons/09d.png");
  }
  let src4;
  if(weather3 === "Clouds"){
    src4 = require("../icons/04d.png");
  }
  else if (weather3 === "Clear"){
    src4 = require("../icons/01d.png");
  }
  else if (weather3 === "Snow"){
    src4 = require("../icons/13d.png");
  }
  else if (weather3 === "Extreme"){
    src4 = require("../icons/11d.png");
  }
  else if (weather3 === "Rain"){
    src4 = require("../icons/09d.png");
  }
  let src5;
  if(weather4 === "Clouds"){
    src5 = require("../icons/04d.png");
  }
  else if (weather4 === "Clear"){
    src5 = require("../icons/01d.png");
  }
  else if (weather4 === "Snow"){
    src5 = require("../icons/13d.png");
  }
  else if (weather4 === "Extreme"){
    src5 = require("../icons/11d.png");
  }
  else if (weather4 === "Rain"){
    src5 = require("../icons/09d.png");
  }
  if (latres === 0 / lonres === 0) {
    document.getElementsByClassName("main").innerHTML = ""
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

      <div className="main">
        <div className="main-info">
          <div className="todays-weather">
            <div className="locations">
              <h4>{cityName}</h4>
              <h3>Weather Today</h3>
            </div>
            <div className="weather-temp">
              <div className="timer">
                <Clock
                  format={"HH:mm"}
                  ticking={true}
                  timezone={"Asia/Kolkata"}
                ></Clock>
                , {day}, {monthnow} {dateone} {year}
              </div>
              <div className="todays-weather-type">
                <div className="weathers-type">
                  <img src={src2} alt="" />
                  <p>{weather1}</p>
                </div>
                <div className="forecast-temp">
                  {temperature1 ? temperature1 : null}°C
                </div>
              </div>
            </div>
            <div className="humidity">
              <div className="forecast-humidity">
                <p>Humidity</p>
                <h1>{hum1}%</h1>
              </div>
              <div className="windspeed">
                <p>Wind Speed</p>
                <h1>{wind1}Km/j</h1>
              </div>
            </div>
          </div>
          <div className="forecast-div-links">
            <div className="forecast-div">
              <div className="graph" id="mychart"></div>
            </div>
            <div className="forecast-divs">
              <Link to="/Forecast/1">
                <div className="forecast-days">
                  <h1>{dateone} {monthnow}</h1>
                  <img src={src2} alt="Loading..." />
                  <div className="forecast-humidity">
                    <p>Humidity</p>
                    <h1>{hum1}%</h1>
                  </div>
                </div>
              </Link>
              <Link to="/Forecast/2">
                <div className="forecast-days">
                  <h1>{datetwo} {monthnow}</h1>
                  <img src={src3} alt="Loading..." />
                  <div className="forecast-humidity">
                    <p>Humidity</p>
                    <h1>{hum2}%</h1>
                  </div>
                </div>
              </Link>
              <Link to="/Forecast/3">
                <div className="forecast-days">
                  <h1>{datethree} {monthnow}</h1>
                  <img src={src4} alt="Loading..." />
                  <div className="forecast-humidity">
                    <p>Humidity</p>
                    <h1>{hum3}%</h1>
                  </div>
                </div>
              </Link>
              <Link to="/Forecast/4">
                <div className="forecast-days">
                  <h1>{datefour} {monthnow}</h1>
                  <img src={src5} alt="Loading..." />
                  <div className="forecast-humidity">
                    <p>Humidity</p>
                    <h1>{hum4}%</h1>
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

export default Firstchild;
