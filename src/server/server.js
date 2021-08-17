
const dotenv = require('dotenv');
dotenv.config();

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
// Start up an instance of app
const app = express();
const fetch = require('node-fetch')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("dist"));
app.get('/', (req, res) => {
  res.sendFile("dist/index.html")
})

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
  console.log(`Server running on localhost:${port}`);
}
// Post Route

app.post('/makeCalls', async (req, res) => {
  let userInput = req.body
  let projectData = ''
  let geonameData = ''
  let weatherData = ''
  let pixabayData = ''
  // call geonames
  const username = process.env.GN_username;
  const geonameBaseURL = `http://api.geonames.org/search?q=${userInput.city}&maxRows=1&type=json&username=${username}`

  await (fetch(encodeURI(geonameBaseURL))
    // get lat long countryName 
    .then(res => res.json())
    .then(data => geonameData = { lng: data.geonames[0].lng, lat: data.geonames[0].lat, countryName: data.geonames[0].countryName, city: data.geonames[0].toponymName }))

  // WEATHERBIT API
  const key = process.env.weather_KEY
  const weatherbitBaseURL = 'http://api.weatherbit.io/v2.0/current?'

  const url = `${weatherbitBaseURL}lat=${geonameData.lat}&lon=${geonameData.lng}&key=${key}&units=I`
  // Call API
  await (fetch(url)
    // get temperature and weather description
    .then(res => res.json())
    .then(res => weatherData = { temp: res.data[0].temp, weather: res.data[0].weather.description, icon: res.data[0].weather.icon }))
  // PIXABAY API
  const pixabayKey = process.env.pixabay_KEY
  const pixabayURL = `https://pixabay.com/api/?key=${pixabayKey}&q=${geonameData.city}&category=places&image_type=photo&orientation=horizontal&safesearch=true`
  // Call API

  await (fetch(pixabayURL)
    .then(res =>
      res.json()
    )
    .then(data => pixabayData = { img: data.hits[0].webformatURL })
  )

  projectData = { temp: weatherData.temp, weather: weatherData.weather, icon: weatherData.icon, cityName: geonameData.city, countryName: geonameData.countryName, date: userInput.date, img: pixabayData.img }

  res.send(projectData)

})