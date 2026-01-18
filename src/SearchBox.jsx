import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({addWeather}){
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);

    const API_URL = `https://api.openweathermap.org/data/2.5/weather`
    // const API_KEY = `182e5a2a62cb32bf602a4deee3021861`
    const API_KEY = `1031e82180981b48e6b9fba105594774`

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json()
            // console.log(jsonResponse);
            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            }
            return result;
        }
        catch(err){
            throw err;
        }
    }


    let handleSubmit=async(e)=>{
        try{
            e.preventDefault();
            // console.log(city);
            let result = await getWeatherInfo();
            addWeather(result)
            setError(false);
            setCity("")
        }
        catch(err){
            setError(true);
        }
    }

    let handleChange = (e) =>{
        setCity(e.target.value)
    }

    return (
        <>
            <h2>
                Search for Weather
            </h2>
            <form action='' onSubmit={handleSubmit}>
                <TextField onChange={handleChange} id="city" label="City Name" variant="outlined" value={city} required/>
                <Button style={{margin:"10px 0 0 15px"}}  variant="contained" type='submit'>Search</Button>
            </form> <br />
            {error && <div style={{color:"red"}}>No such place exist</div>}
        </>
    )
}