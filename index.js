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


    const toggleButton = document.getElementById("toggleDark")
    toggleButton.addEventListener("click", () =>{
        const body = document.querySelector("body")
        body.style.backgroundColor = "black"
        body.style.color = "white"
    })
    document.getElementById("toggleLight").addEventListener("click", ()=> {
        const body = document.querySelector("body")
        body.style.backgroundColor = "rgb(168, 164, 164)"
        body.style.color = "black"
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
            <p>${weatherData.weather[0].description}</p>
        </div>
        <p>Temparature is ${weatherData.main.temp}<sup>o</sup><i>C</i></p>
        <p>Feels like ${weatherData.main["feels_like"]}<sup>o</sup><i>C</i></p> 
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <h5> Add A comment. Double click to delete</h5>
        <form>
            <input id="name-input" placeholder="Enter your name">
            <input id="comment-input" placeholder="Comment how you feel">
            <button id="comment-button" type="submit">Post</button>
        </form>
        <ul id="comment-output"> 

        </ul>
    `
    addComment()
}
function addComment(){
    // const li = document.createElement("li")
    // const brea = document.createElement("br")
    document.addEventListener("submit", (event)=> {
        event.preventDefault();
        const userName = document.getElementById("name-input")
        const userComment = document.getElementById("comment-input")
        let displayComment = document.getElementById("comment-output")
        const li = document.createElement("li")
        li.append(`${userName.value} is feeling ${userComment.value}`)
        displayComment.append(li)

        // delete on double click
        li.addEventListener("dblclick", ()=> {
            displayComment.removeChild(li)
        })
    })
}
document.addEventListener("DOMContentLoaded", () => fetchWeatherData())