import React, { useState } from 'react';
import Loader from './Loader';
import './Weather.css'

let app = {
  "background": 'url(https://images.pexels.com/photos/209963/pexels-photo-209963.jpeg?auto=compress&cs=tinysrgb&w=400)',
  "backgroundSize": 'cover'
}
const WeatherApp = () => {
  const api = {
    key: '02fe573b08fd65f82d9a00eb716e82ce',
    base: 'https://api.openweathermap.org/data/2.5/'
  };
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [weather, setWeather] = useState({});

  const searchCity = () => {
    setIsLoading(true);
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setSearch("");
        setIsLoading(false);
        console.log(result);
      })
  };
  function dateBuilder(d) {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = d.getFullYear();
    let day = d.getDate();
    let month = d.getMonth();

    let alphaMonth = monthNames[month];
    console.log(day + ' ' + alphaMonth + ' ' + year);
    return `${day} ${alphaMonth}, ${year}`;
  };
  return (
    <div className={(weather.name && weather.sys) ? ((weather.main.temp > 23) ? 'warm' : 'cold') : 'app'}>
      <main className='bg-gray-950 text-white mx-auto bg-opacity-40 backdrop-blur-md px-4 py-6 rounded-lg'>
        <div className='w-full flex flex-wrap'>
          <input
            className='w-4/5 px-2 py-2 rounded-sm text-gray-700'
            type="text"
            placeholder='Search..'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button onClick={searchCity} className='w-1/5 flex-1 px-2 py-2 rounded-sm grid items-center justify-center bg-orange-400'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          </button>
        </div>
        {
          isLoading ? <Loader /> : (
            <div className='p-4 text-center'>
              {weather.name && weather.sys ? (
                <div>
                  <h2 className='text-lg'>{weather.name}, {weather.sys.country}</h2>
                  <h3 className='text-gray-300 text-sm'>
                    {weather.dt ? dateBuilder(new Date(weather.dt * 1000)) : ''}
                  </h3>
                  <div className='mt-2'>
                    <h1 className='text-3xl font-bold'>{Math.round(weather.main.temp)}&deg;C</h1>
                    <div className='px-2 py-1 mt-2 rounded-sm bg-orange-500 w-fit mx-auto'>{weather.weather[0].main}</div>
                  </div>
                </div>
              ) : (
                <div>Search your favourite city</div>
              )}
            </div>
          )
        }
      </main>
    </div>
  );
};

export default WeatherApp;