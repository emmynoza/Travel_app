// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");

// Start up an instance of app
const app = express();

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
app.get("/allData", function (req, res) {
  res.send(projectData);
});

// POST Route

app.post("/postData", postData);

function postData(req, res) {
  projectData = req.body;
}

