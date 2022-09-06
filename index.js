function fetchWeatherData(){
    // searchButton.addEventListener("click", ()=> alert(inputText.value))
    const city_name = document.getElementById("input-text")
    const API_key = "22fac045e2b00ac51c7d49a31bf9b146"
    console.log(city_name.value)

    const searchButton = document.getElementById("button-search")
    searchButton.addEventListener("click", () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=${API_key}`)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    })
    
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=${API_key}`)
    //     .then(response => response.json())
    //     .then(response => findWeatherData(response))
    //     .catch(err => console.error(err));
}

// function findWeatherData(){
//     const searchButton = document.getElementById("button-search")
//     searchButton.addEventListener("click", () => console.log(data))
// }


document.addEventListener("DOMContentLoaded", () => fetchWeatherData())