import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";
import axios from "axios";
import Navbar from "./Navbar";


const Weather = () => {
  // Hooks
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [feels, setFeels] = useState(0);

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
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=60d505bb48f9c02e8d1f29a621cd125f&units=metric`
      );
      setTemperature(res.data.main.temp);
      setCityName(res.data.name);
      setWeather(res.data.weather[0].main);
      setFeels(res.data.main.feels_like);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);

  // Code for the Clock :
  // session --> am/pm
  let session;
  let time = new Date();
  let hours = time.getHours();
  if (hours > 12) {
    session = "pm";
  } else if (hours < 12) {
    session = "am";
  } else if (hours = 12) {
    session = "pm";
  }
  // code for the Weekday
  let weekday = time.getDay();
  let day;
  if (weekday === 1) {
    day = "Monday"
  }
  else if (weekday === 2) {
    day = "Tuesday"
  }
  else if (weekday === 3) {
    day = "Wednesday"
  }
  else if (weekday === 4) {
    day = "Thursday"
  }
  else if (weekday === 5) {
    day = "Friday"
  }
  else if (weekday === 6) {
    day = "Saturday"
  }
  else if (weekday === 0) {
    day = "Sunday"
  }

  // code for the date
  let year = time.getFullYear();
  let longMonth = new Date().toLocaleString("en-us", { month: "long" });
  let currday = time.getDate();
  let date = currday + " " + longMonth + " " + year;
  return (
    <>
      <div className="app">
      <Navbar/>
        <div className="main">
         
          <div className="time">
            <div className="greet">
              <div className="icons">
                <div className="day"></div>
              </div>

              <div className="greeting">GoodMorning, Sir</div>
            </div>
            <div className="info">
              <div className="clock">
                <div className="hours">
                  <Clock
                    format={"HH:mm"}
                    ticking={true}
                    timezone={"Asia/Kolkata"}
                  />
                </div>
                <div className="seconds-div">
                  <div className="seconds">
                    :
                    <Clock
                      format={"ss"}
                      ticking={true}
                      timezone={"Asia/Kolkata"}
                    />
                  </div>
                  <div className="timeofday">
                    <p>{session}</p>
                  </div>
                </div>
              </div>
              <div className="dates">
                {day}, {date}
              </div>
            </div>
          </div>
          {!cityName ? (
           <>
            <div className="weather">
              <div className="weather-main">
                <h1>You Are Offline</h1>
              </div>
            </div>
            
           </>
          ) : (
            <div className="weather">
              <div className="weather-main">
                <div className="feels">
                  <div className="weatherthingi">
                    <div className="weather-icon"></div>
                    <div className="weathertype">{weather}</div>
                  </div>
                  <div className="feelsliketemp">
                    Feels like <br />
                    <h1>{feels}</h1>
                  </div>
                </div>
                <div className="temp">
                  <div className="temper">{temperature}</div>
                  <p>Temprature</p>
                </div>
              </div>
              <div className="forecast">
                <div className="search">
                  <div className="searchbox" id="main">
                    {cityName}
                  </div>
                  <div className="location"></div>
                </div>
              </div>
              <div className="forecast" id="lowerbtn">
                <a href="">
                <h1>Forecast</h1>
                <div className="arrow"></div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
