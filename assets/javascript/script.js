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
    const temperature = document.getElementById("temperature").innerHTML =  "Temperature: " + data.main.temp + "°C";
    const description = document.getElementById("description").innerHTML = "Description: " + data.weather[0].description;
    const main = document.getElementById("main").innerHTML = "Weather: " + data.weather[0].main;
    const humidity = document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
    const pressure = document.getElementById("pressure").innerHTML = "Pressure: " + data.main.pressure + "mb";
    const windspeeed = document.getElementById("windspeed").innerHTML = "Windspeed: " + data.wind.speed + "mph";
} 

searchButton.addEventListener("click", ()=>{
    checkWeather(searchInput.value);
})

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