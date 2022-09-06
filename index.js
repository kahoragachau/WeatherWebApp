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
    displayData.innerHTML= weatherData.name
}


document.addEventListener("DOMContentLoaded", () => fetchWeatherData())