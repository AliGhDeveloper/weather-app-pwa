import { useState } from 'react';
import Form from './components/form/Form';
import Weather from './components/weather/Weather';

export default function App() {
    const [weather, setWeather] = useState(null);
    const [time, setTime] = useState('default')
    const cities = [
        {name: 'تهران', lat: 35.70, lon: 51.41 },
        {name: 'اصفهان', lat: 32.64, lon: 51.66 },
        {name: 'تبریز', lat: 38.08, lon: 46.28 },
    ]
    const [city, setCity] = useState(null);
    const handleClick = () => {
        if(!city) return console.log('please enter your city');
        cities.forEach(item => {
            if(city === item.name) {
                if(time === 'default'){
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${item.lat}&lon=${item.lon}&lang=fa&appid=788963dca9f8296f5b3a0e1ca18ce35f`)
                        .then(response => response.json())
                        .then(result => setWeather({...result, city}))
                } else {
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${item.lat}&lon=${item.lon}&lang=fa&appid=788963dca9f8296f5b3a0e1ca18ce35f`)
                        .then(response => response.json())
                        .then(result => setWeather({...result.list[parseInt(time)], city}))
                }
            }
        })
    }
    return (
        <div className="container">
            <Form setCity={setCity} handleClick={handleClick} setTime={setTime}/>
            <Weather data={weather}  />
        </div>
    )
}