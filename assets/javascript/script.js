/* API Key and URL */ 
const apiKey = "423b063fbe53a6369dab2add71d4e472";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

/* Found the solution for this function online */
async function checkWeather(location) { 
    try {
    const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    } catch (error) {
        console.log(error);
    }

    const locationName = document.getElementById("location").innerHTML = data.name;
    let temperature = document.getElementById("temperature").innerHTML =  "Temperature: " + Math.round(data.main.temp) + "°C";
    const description = document.getElementById("description").innerHTML = "Description: " + data.weather[0].description;
    const main = document.getElementById("main").innerHTML = "Weather: " + data.weather[0].main;
    const humidity = document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
    const pressure = document.getElementById("pressure").innerHTML = "Pressure: " + data.main.pressure + "mb";
    const windspeeed = document.getElementById("windspeed").innerHTML = "Windspeed: " + data.wind.speed + "mph";
    const weatherImage = document.getElementById("weatherImagePic");

    /* Got the first line of this code online then added the rest myself */
    if (data.weather[0].main == "Rain"){
        weatherImage.src = "./assets/images/rain.png"
    } 
    else if (data.weather[0].main == "Clouds"){
        weatherImage.src = "./assets/images/clouds.png"
    } 
    else if (data.weather[0].main == "Clear"){
        weatherImage.src = "./assets/images/clear.png"
    } 
    else if (data.weather[0].main == "Snow"){
        weatherImage.src = "./assets/images/snow.png"
    } 
    else if (data.weather[0].main == "Drizzle"){
        weatherImage.src = "./assets/images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherImage.src = "./assets/images/mist.png"
    }
} 

searchButton.addEventListener("click", ()=>{
    checkWeather(searchInput.value);

    if(kelvinCheckbox.checked){
        sumKelvin(data.main.temp);
        let temperature = document.getElementById("temperature").innerHTML =  "Temperature: " + sumKelvin(data.main.temp) + "K";
    }
}) 

/* Function to turn temperature in C to temperature in Fahrenheit */
function sumFahrenheit(temp) {
    return temp * (9/5) + 32; 
  } 

/* Function to turn temperature in C to temperature in Kelvin */
function sumKelvin(temp) {
    return temp + 273.15;
  } 

/* Function to turn wind speed from miles per hour to kilometers per hour */
function sumKPH(speed) {
    return speed * 1.609;
  }

  module.exports = { sumFahrenheit, sumKelvin, sumKPH }; 

  /* Code for optional checkboxes */
  const kelvinCheckbox = document.getElementById(kelvin);
  const fahrenheitCheckbox = document.getElementById(fahrenheit);
  const kphCheckbox = document.getElementById(kph); 

  /* Add event listener to show temperature as kelvin if clicked */
  searchButton.onclick = function(){

    
  } 



/* Test function example 
function sum(a, b) {
    return a + b;
  }
  module.exports = sum; */
    


/** 

const  baseURL = "api.weatherapi.com/v1"

const weatherIcons = "https://www.weatherapi.com/docs/weather_conditions.json"

/* Linking html elements to js file 

const locationInput = document.getElementById("locationInput").value;
const day1Temperature = document.getElementById("day1-temp");
const locationCard = document.getElementById("location-card");
const searchButton = document.getElementById("searchButton");

/*  Optional checkboxes 
const wind = document.getElementById("");
const fahrenheit = document.getElementById("");
const kph = document.getElementById("");
const extra = document.getElementById("");

/* Search function 
 function searchWeather() {
    searchButton.addEventListener(search);
 } 

    */