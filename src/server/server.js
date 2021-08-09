
const dotenv = require('dotenv');
dotenv.config();
// Setup empty JS object to act as endpoint for User Input
let projectData = {};

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


// Get Route
app.get("/sendData", function (req, res) {
  res.send(projectData);
});

// Geonames API call
let userInput = {}

app.post("/userInput", async (req, res) => {
  // date and city inputs go in the userInput
  userInput = req.body;
  // Makes Api Call
  await callGeoAPI()
    .then(res => {
      let data = res.geonames[0]
      projectData = { long: data.lng, lat: data.lat, countryName: data.countryName }
    })
    // send data to another API
    .then(res.send(projectData))
    .catch((error) => {
      console.error('Error:', error);
    })

});
// Call Geonames API function
async function callGeoAPI() {
  // const country = 'US'
  const username = process.env.GN_username;
  const geonameBaseURL = `http://api.geonames.org/search?q=${userInput.city}&maxRows=1&type=json&username=${username}`

  const response = await fetch(geonameBaseURL)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return response.json();

}


