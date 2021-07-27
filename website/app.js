/* Global Variables */
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=7292ab5b2616d42aed863e6989a0f3ca&units=imperial";
const zipCode = document.getElementById("zip");
const feelings = document.getElementById("feelings");
const generate = document.getElementById("generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();

// Get API data and post to server
async function callApi() {
  await fetch(baseUrl + zipCode.value + apiKey)
    .then((res) => res.json())
    .then((data) => {
      let newData = {
        temp: data.main.temp,
        date: newDate,
        msg: feelings.value,
      };

      //   post data to server
      postData("/postData", newData);
    });
  // gets data from server
  getData();
}

// post Data
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
// gets data from server
async function getData() {
  let response = await fetch("/allData")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  updateUI(await response);
}
// updates UI with response returned from the getData function
async function updateUI(response) {
  const dateUI = document.getElementById("date");
  const tempUI = document.getElementById("temp");
  const contentUI = document.getElementById("content");

  dateUI.innerHTML = `<h3 class= 'ui-response'>Date: ${response.date} </h3>`;
  tempUI.innerHTML = `<h3 class= 'ui-response'> Temperature: ${response.temp}°F</h3>`;
  contentUI.innerHTML = `<h3 class= 'ui-response'>Feeling: ${response.msg} </h3>`;
}

// Add event listener
generate.addEventListener("click", submit);

// submit values and call api
function submit(e) {
  e.preventDefault();
  if (!zipCode.value == "" && !feelings.value == "") {
    callApi();
  } else {
    alert("please enter zipcode and content");
  }
}
