import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = '7c07277069a6e46ce7a7f6498f09b57d';

  const getWeather = async () => {
    try {
      if (city !== '') {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Weather Finder</h1>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="OpenWeather Logo" className="logo" />
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter City Name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
