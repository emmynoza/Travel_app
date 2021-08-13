import { submitForm } from "./submit";
import { updateUI } from "./updateUI";

function validateForm(e) {
    e.preventDefault();
    const cityInput = document.getElementById('city').value;
    const dateInput = document.getElementById('date').value;

    const userInput = { city: cityInput, date: dateInput }

    cityInput === '' || dateInput === '' ? console.log('error') : submitForm(userInput)
        .then(data => {
            // response to send to UI
            updateUI(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        })

}

export { validateForm }