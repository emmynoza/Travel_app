/* Global Variables */
const baseUrl = "https://api.openweathermap.org/";
const apiKey = "7292ab5b2616d42aed863e6989a0f3ca";
const zipCode = document.getElementById("zip").value;
const feelings = document.getElementById("feelings");

const generate = document.getElementById("generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
