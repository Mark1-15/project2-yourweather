/* API Key and URL */ 
const apiKey = "0fa7fd2f71334857a73124304252602";
const apiUrl = "https://api.weatherapi.com/v1/current.json?key=`${apiKey}`&q=`${locationInput}`";

const  baseURL = "api.weatherapi.com/v1"

const weatherIcons = "https://www.weatherapi.com/docs/weather_conditions.json"

/* Linking html elements to js file */

const locationInput = document.getElementById("locationInput").value;
const day1Temperature = document.getElementById("day1-temp");
const locationCard = document.getElementById("location-card");
const searchButton = document.getElementById("searchButton");

/*  Optional checkboxes */
const wind = document.getElementById("");
const fahrenheit = document.getElementById("");
const kph = document.getElementById("");
const extra = document.getElementById("");

/* Search function 
 function searchWeather() {
    searchButton.addEventListener(search);
 } */

 searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}