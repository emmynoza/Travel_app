import { today } from "./today"
const dateInput = document.getElementById('date')

dateInput.addEventListener('focus', e => {
    e.preventDefault();
    // sets input to today's date
    let dateControl = document.querySelector('input[type="date"]');
    dateControl.setAttribute('min', today());
    dateControl.setAttribute('max', '2121-01-01')
    dateControl.value = today();
})

export { dateInput }