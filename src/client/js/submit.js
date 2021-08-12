import { updateUI } from "./updateUI";

const submitForm = function (e) {
    e.preventDefault();
    const cityInput = document.getElementById('city').value;
    const dateInput = document.getElementById('date').value;

    const userInput = { city: cityInput, date: dateInput }

    async function submitToServer(input) {

        const response = await fetch('/makeCalls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            credentials: 'same-origin',
            body: JSON.stringify(input)
        });

        return response.json()
    }

    submitToServer(userInput)
        .then(data => {
            // response to send to UI
            updateUI(data)

        })
        .catch((error) => {
            console.error('Error:', error);
        })
}
export { submitForm }