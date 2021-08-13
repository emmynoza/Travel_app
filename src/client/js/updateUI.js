import { dateCountdown } from "./dateCountdown";


function updateUI(data) {
    console.log(data);
    const results = document.getElementById('results')
    const tripInfo = document.getElementById('trip-info')

    const destination = document.getElementById('destination');
    const weatherWrapper = document.getElementById('weather');

    destination.innerHTML = `
    <h2> Your Upcoming Trip Is ${dateCountdown(data.date)} Days Away! </h2>
    
        <ul>
            <li> Destination: ${data.cityName}, ${data.countryName}</li>
            <li> Trip Date: ${data.date} </li>
            
        </ul>
    <img
    src=${data.img}
    alt= "image of ${data.cityName}"
    />
    `
    weatherWrapper.innerHTML = `
    <h3> Current Weather in ${data.cityName}: </h3>
    <ul class= "weather-data" id="weather-data">
        <li>${data.temp} &deg; F</li>
        <li> ${data.weather} </li>
        <li>
            <img
            src= "https://www.weatherbit.io/static/img/icons/${data.icon}.png" alt='weather-icon'>
        </li>
    </ul>
    `
    results.style.display = 'block'
    results.scrollIntoView({ behavior: "smooth" })
    dateCountdown(data.date)
}

export { updateUI }