import InfoBox from './infoBox';
import SearchBox from './SearchBox'
import { useState } from 'react';
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({

        city: "Delhi",
        humidity: 53,
        feel_like: 21.69,
        temp: 22.05,
        tempmax: 22.05,
        tempmin: 22.05,
        weather: "haze",

    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox weatherInfo={weatherInfo}/>
        </div>
    );
}