import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1633458942455-a52fabc1b5fc?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const HOT_URL="https://images.unsplash.com/photo-1565309503881-b823e488227a?q=80&w=1502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1676573201503-f1f0354bb387?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



    return (
        <div className="InfoBox">
            <h1>Weather Info-{info.weather}</h1>
            <div className="card-container">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp>20? HOT_URL :COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp>20?<WbSunnyIcon/> :<AcUnitIcon/>}

                            
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature={info.temp}&deg;C</p>
                            <p>Humidity={info.humidity}</p>
                            <p>Min temperature={info.tempMin}&deg;</p>
                            <p>Max temperature={info.tempMax}&deg;</p>
                            <p>The weather can be described as <b>{info.weather}</b> and feels like:<b>{info.feelsLike}&deg;</b></p>

                        </Typography>
                    </CardContent>


                </Card>
            </div>
        </div>)
}