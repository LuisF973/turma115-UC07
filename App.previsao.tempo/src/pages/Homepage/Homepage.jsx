import { useState, useRef } from "react"
import axios from "axios"
import WeatherInformations from "../../components/WeatherInformations/WeatherInformations";
import "./Homepage.css"

function Homepage() {
     const inputRef = useRef(); // retorna o valor de algo
     const [weather, setWeather] = useState();

    async function searchCity() {
        const city = inputRef.current.value;
        const key = "1f7188a2d069d3490d706ce119b07c17";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;
        const  apiIfo = await axios.get(url);
        setWeather(apiIfo.data)
        console.log(apiIfo.data)
    }
    
    return(
        <div className="conteiner">
            <h1>
                componente Homepage
            </h1>
            <input  ref={inputRef} type="text" placeholder="Digite a Cidade" />
            <button onClick={searchCity}> Buscar </button>
             
        { weather && <WeatherInformations  weather = {weather}/>}
        </div>
    )
}

export default Homepage