/* API Key and URL */ 
const apiKey = "423b063fbe53a6369dab2add71d4e472";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();

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