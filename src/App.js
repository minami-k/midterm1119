import React, {Component} from "react";
 import axios from 'axios';
 import WeatherDetails from './component/WeatherDetails';
 import CurrentDate from "./component/CurrentDate";
 import 'react-toastify';
import './App.css'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'



class App extends Component{

  state = {
    temp: "",
    cityName: "",
    weather: "",
    high: "",
    low: "",
    feelsLike: "",
    humidity: "",
    icon: "",
    country:""
  }

  componentDidMount(){
    const urlDefault = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`



      axios(urlDefault).then((response) => {
      this.setState({
        temp: response.data.main.temp,
        cityName: response.data.name,
        weather: response.data.weather[0].description,
/*         high: response.data.main.temp_max,
        low: response.data.main.temp_min,
 */     feelsLike: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        icon: response.data.weather[0].icon,
         country: response.data.sys.country,
  
      })
    })

 
/*      fetch(urlDefault)
    .then(res => res.json())
    .then(result => console.log(result))
    .catch() 
 */
  }
  


  searchCity = (e) => {
    e.preventDefault()
    const city = document.querySelector('#city').value
    this.getCityWeather(city)
  }


  //to search 
  getCityWeather = async (city) => {
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
         

/*     fetch(url)
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
 */       
    
      axios(url)
     .then((response) => {
      console.log(response.data);

      this.setState({
        temp: response.data.main.temp,
         cityName: response.data.name,
        weather:response.data.weather[0].main,
        high: response.data.main.temp_max,
        low: response.data.main.temp_min,
        feelsLike: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        icon: response.data.weather[0].icon,
        country: response.data.sys.country,
  
      })
    }) 
    .catch((error) => {
       console.log(error);
/*       alert('error')
 */      toast.error('No city found') 
    })
  


 
  }


  componentDidUpdate(){

    const textForm = document.getElementById('city');
    if(textForm !== ''){
      textForm.value = '';
    }
  }

 

  render(){
    return (
      <div className='App'>
        <main>
        <h1>Weather App</h1>

        <div>
        <ToastContainer 
        closeButton={true} 
        position="top-center"
        autoClose={5000}
        />
          <form onSubmit={this.searchCity} autoComplete="off">
          <input 
          class="enter-space" 
          type="text" 
          id="city" 
          placeholder="Enter a City Name"
          />
          </form>

        </div>
        <CurrentDate />

{this.state.cityName &&<WeatherDetails
                           icon={this.state.icon}
                           weather ={this.state.weather}
                           cityName={this.state.cityName}
                           country={this.state.country}
         
         temp= {Math.round(this.state.temp)}
/*       high={this.state.high}
         low = {this.state.low}
 */      feelsLike={Math.round(this.state.feelsLike)}
         humidity={this.state.humidity}

         />}
         
         

</main>
      </div>
    );
  
  }
}

export default App;
