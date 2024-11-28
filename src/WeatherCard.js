import React from 'react';
import './WeatherCard.css';

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <div className="weather-details">
        <div className="temperature">
          <h3>{data.main.temp}°C</h3>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
        </div>
        <div className="details">
          <p>Condition: {data.weather[0].description}</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind: {data.wind.speed} m/s</p>
          <p>Pressure: {data.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
