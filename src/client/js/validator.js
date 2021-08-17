import { submitForm } from "./submit";
import { updateUI } from "./updateUI";

const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', e => {
    validateForm(e)
})

function validateForm(e) {
    e.preventDefault();
    const cityInput = document.getElementById('city').value;
    const dateInput = document.getElementById('date').value;

    const userInput = { city: cityInput, date: dateInput }

    cityInput === '' || dateInput === '' ? alert('Please enter a destination and a date!') : submitForm(userInput)
        .then(data => {
            // response to send to UI
            updateUI(data)
        })

}

export { validateForm }