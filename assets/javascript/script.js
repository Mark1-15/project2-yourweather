/* API Key and URL */ 
const apiKey = "0fa7fd2f71334857a73124304252602";
const apiUrl = "https://www.weatherapi.com/api-explorer.aspx"

const  baseURL = "api.weatherapi.com/v1"

const weatherIcons = "https://www.weatherapi.com/docs/weather_conditions.json"

/* Linking html elements to js file */

const locationInput = document.getElementById("locationInput");
const day1Temperature = document.getElementById("day1-temp");
const locationCard = document.getElementById("location-card");
const searchButton = document.getElementById("searchButton");

/*  Optional checkboxes */
const wind = document.getElementById("");
const fahrenheit = document.getElementById("");
const kph = document.getElementById("");
const extra = document.getElementById("");

/* Search function */
 function searchWeather() {
    searchButton.addEventListener(search);
 } 
