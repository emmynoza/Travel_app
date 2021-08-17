// sets input to today's date
let dateControl = document.querySelector('input[type="date"]');
dateControl.setAttribute('min', today());
dateControl.setAttribute('max', '2121-01-01')
dateControl.value = today();

function today() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return today

}
export { today }