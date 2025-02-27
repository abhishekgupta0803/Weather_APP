import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({weatherInfo}) {

    let imgUrl = "https://media.istockphoto.com/id/491701259/photo/blue-sky-with-sun.jpg?s=612x612&w=0&k=20&c=aB7c-e0YFezBb8cgSykiEcAh_2fXEie3inIudnsNa9g=";
    let rain_Url = "https://static.vecteezy.com/system/resources/thumbnails/043/269/928/small_2x/water-falls-from-green-leaf-to-water-photo.jpg";
    let cold_Url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ec4tOU2-AttRfg3c4ckOPBZcHgW8XwghSw&s";
    let hot_Url =  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoD9tTIV7u0CzokULQ3j-Trsy9bCR45NrxxW12gmwSTPudtH-bc0xIn9Se4kxfGcoJMtUmULTiB1Yh4-yEeW95jNJC718E5ghZgZf9RCwFs0jfLm4hYCFWtcAhCxVc3Mol4_kUXu-6iP6W/s1600/camel817.jpg";
    return (
        <div className='boxCntnr'>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={weatherInfo.humidity > 80 ? rain_Url : weatherInfo.temp >15 ? hot_Url : cold_Url }
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <div>
                                   <b> {weatherInfo.city}</b> &nbsp;
                                    {weatherInfo.humidity > 80 ? <ThunderstormIcon/> : weatherInfo.temp >15 ? <WbSunnyIcon/> :<AcUnitIcon/>}
                                </div>
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                <div>Temprature = {weatherInfo.temp}&deg;C</div>
                                <div>Humidity= {weatherInfo.humidity} </div>
                                <div>Min Temp={weatherInfo.tempmin}&deg;C</div>
                                <div>Max Temp={weatherInfo.tempmax}&deg;C</div>
                                <p>The weather can be described as {weatherInfo.weather} and feels like {weatherInfo.feel_like}&deg;C</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}