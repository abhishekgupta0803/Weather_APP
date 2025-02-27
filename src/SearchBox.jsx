import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    const [city, setCity] = useState("");
    const [error, setErr] = useState(false);


    const URLAPI = "https://api.openweathermap.org/data/2.5/weather";
    const key = "002e571ff85fc9e694ad5b38beb960b1";

    let weatherData = async ()=>{
        try{

            let response =  await fetch(`${URLAPI}?q=${city}&appid=${key}&units=metric`);
            let respjson = await response.json();
            console.log(respjson);
            
            let result = {
                city:respjson.name,
                humidity:respjson.main.humidity,
                temp:respjson.main.temp,
                tempmax:respjson.main.temp_max,
                tempmin:respjson.main.temp_min,
                feel_like:respjson.main.feels_like,
                weather:respjson.weather[0].description,
            }
            console.log(result);
            return result;

        }catch(err){
            throw err;
        }


    }

    let toUpdate = (event)=>{
        setCity(event.target.value);
    }

    let SubmitData = async (event)=>{
        try{

            event.preventDefault();
            console.log(city);
            setCity("");
            let info = await weatherData();
            updateInfo(info);

        }catch(err){
            setErr(true);
        }
    }

    return (
        <div className="searchBox">

            <form onSubmit={SubmitData}>
            <TextField id="searchBox" label="City" variant="outlined"  value={city} onChange={toUpdate} required/>
            <br />  <br />
            <Button variant="contained" type="submit" >Search</Button>
            <br />  <br />
            {error && <b style={{color:"red"}}>No such Place Exist !</b>}
            <br /> <br />
            </form>

        </div>
    );
}