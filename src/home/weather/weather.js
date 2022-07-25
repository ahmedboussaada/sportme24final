import "./weather.css"
import axios from "axios"
import {useState , useEffect} from "react"




function Weather (){
    const API_KEY = 'ec803ac071f8c5713c4fbf0510c1818f';
    const [name , setName] = useState("Tunisia")
    const [aRname , setArName] = useState("Tunisia")
    const [weather , setWeather] = useState(false)

useEffect(()=>{
    display()
})

    function display(){
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${API_KEY}`).then((res)=>{
            setArName(res.data[0].local_names.ar) 
            console.log(res)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${API_KEY}`).then((d)=>{
                setWeather(d)
            })
        })
        }

    return (
        <div className="cardweather">
            <div className="search">
            <input type="text" className="search-bar" placeholder="Search" id="name" onChange={(e)=>{setName(e.target.value)}}/>
            <button className="btnsearch" onClick={()=>{display()}} >Searching</button>
            </div>
        <div className="weather">
            <h2   id="root">City name :{aRname}</h2>
            <div  id="temp"> Temperature :{Math.floor(weather.data?.main.temp-273.15)}</div>
            <div id="description">{weather.data?.description}</div> 
            <div  id="humidity">Humidity: {weather.data?.main.humidity} %</div>
            <div  id="wind">Wind Speed: {Math.floor(weather.data?.wind.speed*3.6)} Km/h</div>
        </div>
    </div>
    )
}
export default Weather 
