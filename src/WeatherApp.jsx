import InfoBox from "./InfoBox";
import SearchBox from './SearchBox';
import {useState} from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city: "Visakhapatnam",
        feelsLike: 26.22,
        humidity: 100,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        weather: "overcast clouds",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather app</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}