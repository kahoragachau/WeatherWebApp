function fetchWeatherData(){
    const city_name = document.getElementById("input-text")
    const API_key = "22fac045e2b00ac51c7d49a31bf9b146"
    const searchButton = document.getElementById("button-search")


    searchButton.addEventListener("click", () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=${API_key}&units=metric`)
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
        <div class="more-info">
            <img src="http://openweathermap.org/img/wn/${iconDisplay}@2x.png" alt="icon">
            <p>Description: ${weatherData.weather[0].description}</p>
        </div>
        <p>Temparature is ${weatherData.main.temp}<sup>o</sup><i>C</i></p>
        <p>Feels like ${weatherData.main["feels_like"]}<sup>o</sup><i>C</i></p> 
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p></p>
    `
}


document.addEventListener("DOMContentLoaded", () => fetchWeatherData())