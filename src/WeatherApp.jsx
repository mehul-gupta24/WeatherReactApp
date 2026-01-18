import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){

    let [weatherInfo , setWeatherInfo] = useState({
        city : "Mumbai",
        feelsLike: 25.99,
        humidity: 57,
        temp: 25.99 , 
        tempMax: 25.99 ,
        tempMin: 25.94 ,
        weather : "smoke"
    });

    let addWeather = (obj) =>{
      setWeatherInfo(obj);
    }

    return (
        <div>
            <SearchBox addWeather={addWeather}/>
            <InfoBox result={weatherInfo}/>
        </div>
    )
}