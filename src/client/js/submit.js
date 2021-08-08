const submitForm = function (evt) {
    evt.preventDefault();
    const cityInput = document.getElementById('city').value;
    const dateInput = document.getElementById('date').value;

    async function submitToServer(city, date) {

        const userInput = { city: city, date: date }

        const response = await fetch('/userInput', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(userInput)

        });
        return response.json();


    }

    submitToServer(cityInput, dateInput)
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}
export { submitForm }