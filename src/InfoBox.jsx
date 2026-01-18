import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox( {result} ){

    const hotImg = "https://tripuranewslive.com/wp-content/uploads/2024/04/IMG-20240402-WA0000.jpg"
    const coldImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6CWHJUDTgJeCCTUDxDoGtUIhU-zoKiXnyA&s"
    const rainyImg = "https://media.istockphoto.com/id/503284599/photo/rainy-weather.jpg?s=612x612&w=0&k=20&c=pV38CVp0CLArYEZ6OUWnaqo6J5mo4JpbEZd61Vxr_I4="

    return (<>
        <div className="InfoBox">
            <h3>InfoBox</h3>
            <div className='cardContent'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={result.humidity > 80 ? rainyImg : result.temp > 15 ? hotImg : coldImg}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{result.city}</Typography>
                        <div>
                            <h5>Temperature = {result.temp}&deg;C</h5>
                            <h5>Humidity = {result.humidity}</h5>
                            <h5> <i>Weather is of type {result.weather} and temperature feels like {result.feelsLike}&deg;C</i></h5>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
        </>
    )
}