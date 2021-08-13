import { today } from "./today";

function dateCountdown(dateInput) {
    let d1 = new Date(dateInput.replace(/\-/g, '/'));
    let d2 = new Date(today().replace(/\-/g, '/'));
    // calculates from milliseconds to days
    let difference = (d1.getTime() - d2.getTime()) / (1000 * 60 * 60 * 24);

    return difference.toFixed(0)
}

export { dateCountdown }