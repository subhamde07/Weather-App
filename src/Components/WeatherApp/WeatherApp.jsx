import React from 'react'
import './WeatherApp.css'
import searchIcon from '../Assets/search.gif'
import cloud_icon from '../Assets/cloud.png'
import humidity_icon from '../Assets/humidity.png'
import wind_icon from '../Assets/wind.png'

// https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=Metric&appid=31670432fe1486542515b8fc21e2663f

export const WeatherApp = () => {

  let api_key = "31670432fe1486542515b8fc21e2663f";

  const search = async () =>{
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value === ""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " Km/h";
    temperature[0].innerHTML = data.main.temp + " °C";
    location[0].innerHTML = data.name;
  }

  return (
    <div className="container">
      <div className="top-ber">
        <input type="text" className="cityInput" placeholder="Kolkata" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">Kolkata</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
