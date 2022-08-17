import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Clock from "react-live-clock";
import axios from "axios";
import Graph from "../Graph";
import {
  XAxis,
  YAxis,
  Area,
  AreaChart,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Forecast = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [feels, setFeels] = useState(0);
  const [hum, setHum] = useState("");
  const [wind, setWind] = useState("");
  const [weather1, setWeather1] = useState("");
  const [weather2, setWeather2] = useState("");
  const [weather3, setWeather3] = useState("");
  const [weather4, setWeather4] = useState("");
  const [hum1, setHum1] = useState("");
  const [hum2, setHum2] = useState("");
  const [hum3, setHum3] = useState("");
  const [hum4, setHum4] = useState("");
  const [temperature1, setTemperature1] = useState(" ");
  const [temperature2, setTemperature2] = useState(" ");
  const [temperature3, setTemperature3] = useState(" ");
  const [temperature4, setTemperature4] = useState(" ");
  const [temperaturemax, setTemperaturemax] = useState(" ");
  const [temperature1max, setTemperature1max] = useState(" ");
  const [temperature2max, setTemperature2max] = useState(" ");
  const [temperature3max, setTemperature3max] = useState(" ");
  const [temperature4max, setTemperature4max] = useState(" ");
  const [temperaturemin, setTemperaturemin] = useState(" ");
  const [temperature1min, setTemperature1min] = useState(" ");
  const [temperature2min, setTemperature2min] = useState(" ");
  const [temperature3min, setTemperature3min] = useState(" ");
  const [temperature4min, setTemperature4min] = useState(" ");

  let date = new Date();
  let datetoday = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let monthnow;

  let dateone = datetoday + 1;
  let datetwo = datetoday + 2;
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
      setTemperature(res.data.list[0].main);
      setCityName(res.data.city.name);
      setWeather(res.data.list[0].weather[0].main);
      setFeels(res.data.list[0].main.feels_like);
      setHum(res.data.list[0].main.humidity);
      setWind(res.data.list[0].wind.speed);
      setWeather1(res.data.list[4].weather[0].main);
      setWeather2(res.data.list[8].weather[0].main);
      setWeather3(res.data.list[12].weather[0].main);
      setWeather4(res.data.list[16].weather[0].main);
      setHum1(res.data.list[4].main.humidity);
      setHum2(res.data.list[8].main.humidity);
      setHum3(res.data.list[12].main.humidity);
      setHum4(res.data.list[16].main.humidity);
      setTemperature1(res.data.list[4].main);
      setTemperature2(res.data.list[8].main);
      setTemperature3(res.data.list[12].main);
      setTemperature4(res.data.list[20].main);
      setTemperaturemin(res.data.list[0].main.temp_min);
      setTemperaturemax(res.data.list[0].main.temp_max);
      setTemperature1max(res.data.list[4].main.temp_max);
      setTemperature2max(res.data.list[8].main.temp_max);
      setTemperature3max(res.data.list[12].main.temp_max);
      setTemperature4max(res.data.list[20].main.temp_max);
      setTemperature1min(res.data.list[4].main.temp_min);
      setTemperature2min(res.data.list[8].main.temp_min);
      setTemperature3min(res.data.list[12].main.temp_min);
      setTemperature4min(res.data.list[20].main.temp_min);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  let src;
  if (weather === "Clouds") {
    src = require("../icons/04d.png");
  } else if (weather === "Clear") {
    src = require("../icons/01d.png");
  } else if (weather === "Snow") {
    src = require("../icons/13d.png");
  } else if (weather === "Extreme") {
    src = require("../icons/11d.png");
  } else if (weather === "Rain") {
    src = require("../icons/09d.png");
  }
  let src2;
  if (weather1 === "Clouds") {
    src2 = require("../icons/04d.png");
  } else if (weather1 === "Clear") {
    src2 = require("../icons/01d.png");
  } else if (weather1 === "Snow") {
    src2 = require("../icons/13d.png");
  } else if (weather1 === "Extreme") {
    src2 = require("../icons/11d.png");
  } else if (weather1 === "Rain") {
    src2 = require("../icons/09d.png");
  }
  let src3;
  if (weather2 === "Clouds") {
    src3 = require("../icons/04d.png");
  } else if (weather2 === "Clear") {
    src3 = require("../icons/01d.png");
  } else if (weather2 === "Snow") {
    src3 = require("../icons/13d.png");
  } else if (weather2 === "Extreme") {
    src3 = require("../icons/11d.png");
  } else if (weather2 === "Rain") {
    src3 = require("../icons/09d.png");
  }
  let src4;
  if (weather3 === "Clouds") {
    src4 = require("../icons/04d.png");
  } else if (weather3 === "Clear") {
    src4 = require("../icons/01d.png");
  } else if (weather3 === "Snow") {
    src4 = require("../icons/13d.png");
  } else if (weather3 === "Extreme") {
    src4 = require("../icons/11d.png");
  } else if (weather3 === "Rain") {
    src4 = require("../icons/09d.png");
  }
  let src5;
  if (weather4 === "Clouds") {
    src5 = require("../icons/04d.png");
  } else if (weather4 === "Clear") {
    src5 = require("../icons/01d.png");
  } else if (weather4 === "Snow") {
    src5 = require("../icons/13d.png");
  } else if (weather4 === "Extreme") {
    src5 = require("../icons/11d.png");
  } else if (weather4 === "Rain") {
    src5 = require("../icons/09d.png");
  }
  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);

  // Graph Data
  const data = [{}];

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
                , {day}, {monthnow} {datefour} {year}
              </div>
              <div className="todays-weather-type">
                <div className="weathers-type">
                  <img src={src} alt="" />
                  <p>{weather}</p>
                </div>
                <div className="forecast-temp">
                  {temperature4.temp ? temperature4.temp.toFixed() : null}°C
                </div>
              </div>
            </div>
            <div className="humidity">
              <div className="forecast-humidity">
                <p>Humidity</p>
                <h1>{hum4}%</h1>
              </div>
              <div className="windspeed">
                <p>Wind Speed</p>
                <h1>{wind}Km/j</h1>
              </div>
            </div>
          </div>
          <div className="forecast-div-links">
            <div className="forecast-div">
              <div className="graph" id="mychart">
                <Graph
                  temp={temperature.temp}
                  tempmax={temperaturemax}
                  tempmin={temperaturemin}
                  temp1={temperature1.temp}
                  temp2={temperature2.temp}
                  temp3={temperature3.temp}
                  temp4={temperature4.temp}
                  temp1max={temperature1max}
                  temp2max={temperature2max}
                  temp3max={temperature3max}
                  temp4max={temperature4max}
                  temp1min={temperature1min}
                  temp2min={temperature2min}
                  temp3min={temperature3min}
                  temp4min={temperature4min}
                  date={datetoday}
                  date1={dateone}
                  date2={datetwo}
                  date3={datethree}
                  date4={datefour}
                />
              </div>
            </div>
            <div className="forecast-divs">
              <Link to="/Forecast/1">
                <div className="forecast-days" >
                  <h1>
                    {dateone} {monthnow}
                  </h1>
                  <img src={src2} alt="" />
                  <div className="forecast-humidity">
                    <p>Humidity</p>
                    <h1>{hum1}%</h1>
                  </div>
                </div>
              </Link>
              <Link to="/Forecast/2">
                <div className="forecast-days">
                  <h1>
                    {datetwo} {monthnow}
                  </h1>
                  <img src={src3} alt="" />
                  <div className="forecast-humidity">
                    <p>Humidity</p>
                    <h1>{hum2}%</h1>
                  </div>
                </div>
              </Link>
              <Link to="/Forecast/3">
                <div className="forecast-days">
                  <h1>
                    {datethree} {monthnow}
                  </h1>
                  <img src={src4} alt="" />
                  <div className="forecast-humidity">
                    <p>Humidity</p>
                    <h1>{hum3}%</h1>
                  </div>
                </div>
              </Link>
              <Link to="/Forecast/4"  id="selected-day">
                <div className="forecast-days">
                  <h1>
                    {datefour} {monthnow}
                  </h1>
                  <img src={src5} alt="" />
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

export default Forecast;
