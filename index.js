function fetchWeatherData(){
    const city_name = document.getElementById("input-text")
    const API_key = "22fac045e2b00ac51c7d49a31bf9b146"
    const searchButton = document.getElementById("button-search")


    searchButton.addEventListener("click", () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=${API_key}`)
        .then(response => response.json())
        .then(response => displayWeatherData(response))
        .catch(err => console.error(err));
    })
}

function displayWeatherData(weatherData){
    console.log(weatherData)
    console.log(weatherData.name)
    const displayData = document.getElementById("output-section")
    const iconDisplay = weatherData.weather[0].icon
    displayData.innerHTML= `
        <p>The forecast for ${weatherData.name} is:</p>
        <p>The weather feels like ${weatherData.main["feels_like"]}<sup>o</sup>C</p> 
        <img src="http://openweathermap.org/img/wn/${iconDisplay}@2x.png" alt="icon">
    `
}


document.addEventListener("DOMContentLoaded", () => fetchWeatherData())