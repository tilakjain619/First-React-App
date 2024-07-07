import React, { useState } from 'react'

const WeatherApp = () => {
    const api = {
        key: '02fe573b08fd65f82d9a00eb716e82ce',
        base: 'https://api.openweathermap.org/data/2.5/'
    }
    const [search, setSearch] = useState("Nashik");
    const [weather, setWeather] = useState({});

    const searchCity = (evt) => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    console.log(result);
                    setSearch("");
                })
        }
    }
    function dateBuilder(d){
        console.log(d);
        let year = d.getFullYear();
        let day = d.getDate();
        let month = d.getMonth();
        
        return `${day} ${month}, ${year}`;
    }
    return (
        <div className='min-h-screen'>
          <main>
            <input
              type="text"
              placeholder='Search..'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyPress={searchCity}
            />
            <div>
              {weather.sys ? (
                <h2>{weather.name}, {weather.sys.country}</h2>
              ) : (
                <h2>Loading...</h2>
              )}
              <h3>
                {weather.dt ? dateBuilder(new Date(weather.dt * 1000)) : ''}
              </h3>
            </div>
          </main>
        </div>
      );
}

export default WeatherApp
