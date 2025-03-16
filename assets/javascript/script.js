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

    /* Results Variables */
    const locationName = document.getElementById("location").innerHTML = data.name;
    let temperature = document.getElementById("temperature").innerHTML =  "Temperature: " + Math.round(data.main.temp) + "°C";
    const description = document.getElementById("description").innerHTML = "Description: " + data.weather[0].description;
    const main = document.getElementById("main").innerHTML = "Weather: " + data.weather[0].main;
    const humidity = document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
    const pressure = document.getElementById("pressure").innerHTML = "Pressure: " + data.main.pressure + "mb";
    let windspeeed = document.getElementById("windspeed").innerHTML = "Windspeed: " + Math.round(data.wind.speed) + "mph";
    const weatherImage = document.getElementById("weatherImagePic");

    /* Got the first line of this code online then added the rest myself */
    if (data.weather[0].main == "Rain"){
        weatherImage.src = "./assets/images/rain.png";
    } 
    else if (data.weather[0].main == "Clouds"){
        weatherImage.src = "./assets/images/clouds.png";
    } 
    else if (data.weather[0].main == "Clear"){
        weatherImage.src = "./assets/images/clear.png";
    } 
    else if (data.weather[0].main == "Snow"){
        weatherImage.src = "./assets/images/snow.png";
    } 
    else if (data.weather[0].main == "Drizzle"){
        weatherImage.src = "./assets/images/drizzle.png";
    }
    else if (data.weather[0].main == "Haze"){
        weatherImage.src = "./assets/images/mist.png";
    }
    return data
} 


/* Code for optional checkboxes */
const kelvinCheckbox = document.getElementById("kelvin");
const fahrenheitCheckbox = document.getElementById("fahrenheit");
const kphCheckbox = document.getElementById("kph"); 

/* Tutor suggested async await function for data variable for global scope, allowing checkbox if statements */
searchButton.addEventListener("click", async ()=>{
    const data = await checkWeather(searchInput.value);

    if(kelvinCheckbox.checked && fahrenheitCheckbox.checked){
        // Below trigger modal display code from Tutor to show error if both kelvin and fahrenheit are checked
        const exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"));
        exampleModal.show();
    }   // Below checks if the Kelvin box is ticked with windspeed to provide kelvin results for temperature and kph for windspeed
    else if(kphCheckbox.checked && kelvinCheckbox.checked){
        sumKPH(data.main.wind);
        let windspeeed = document.getElementById("windspeed").innerHTML = "Windspeed: " + Math.round(sumKPH(data.wind.speed)) + "kph";
        sumKelvin(data.main.temp);
        let temperature = document.getElementById("temperature").innerHTML =  "Temperature: " + Math.round(sumKelvin(data.main.temp)) + "K";
    }   // Below checks if the Fahrenheit box is ticked with windspeed to provide fahrenheit results for temperature and kph for windspeed
    else if(fahrenheitCheckbox.checked && kphCheckbox.checked){
        sumKPH(data.main.temp);
        let temperature = document.getElementById("temperature").innerHTML =  "Temperature: " + Math.round(sumFahrenheit(data.main.temp)) + "F";
        sumKPH(data.main.wind);
        let windspeeed = document.getElementById("windspeed").innerHTML = "Windspeed: " + Math.round(sumKPH(data.wind.speed)) + "kph";
    }  // Below checks if just the Kelvin box is ticked
    else if(kelvinCheckbox.checked){
        sumKelvin(data.main.temp);
        let temperature = document.getElementById("temperature").innerHTML =  "Temperature: " + Math.round(sumKelvin(data.main.temp)) + "K";
    }  // Below checks if just the Fahrenheit box is ticked
    else if(fahrenheitCheckbox.checked){
        sumFahrenheit(data.main.temp);
        let temperature = document.getElementById("temperature").innerHTML =  "Temperature: " + Math.round(sumFahrenheit(data.main.temp)) + "°F";
    }  // checks if just the KPH box is ticked
    else if(kphCheckbox.checked){
        sumKPH(data.main.wind);
        let windspeeed = document.getElementById("windspeed").innerHTML = "Windspeed: " + Math.round(sumKPH(data.wind.speed)) + "kph";
    }
});

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
