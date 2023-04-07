import React, { useState } from 'react';

export default function Weather({country}) {
    const [countryName, setCountryName] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherData = () => {
        const apiKey = '670312cfcbcdcfe9949a59bb65ebbd77';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(error => console.log(error));
    }

    return (
        <div style={{ margin : "5%",marginTop:"10%"}}>
            <div style={{ marginTop : "2%",marginBottom:"3%", color: "#48ACF0",fontWeight:"bold",fontSize:"2rem",textAlign: "center"}}>SEARCH THROUGH THE WEATHER IN DIFFERENT CITIES ACROSS {country} ?</div>
            <input type="text"
                   value={countryName}
                   onChange={(e) => setCountryName(e.target.value)}
                   style={{padding: "10px", width:"100%"}}
                   placeholder="Enter City Name"
            />
            <button
                onClick={getWeatherData}
                style={{padding: "10px", border: "none",backgroundColor:"#48ACF0",fontWeight:"bold",color:"white",cursor:"pointer"}}>
                Get Weather Data
            </button>

            {weatherData &&
                <div>
                    <h2 style={{color:"#48ACF0"}}>{weatherData.name} Weather Today</h2>
                    <p>Temperature: {weatherData.main.temp}</p>
                    <p>Humidity: {weatherData.main.humidity}</p>
                    <p>Wind Speed: {weatherData.wind.speed}</p>
                </div>
            }
        </div>
    );
}


