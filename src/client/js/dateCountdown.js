import { today } from "./today";

function dateCountdown(dateInput) {

    let d1 = new Date(dateInput.replace(/\-/g, '/'));
    let d2 = new Date(today().replace(/\-/g, '/'));
    // calculates from milliseconds to days
    const difference = (d1.getTime() - d2.getTime()) / (1000 * 60 * 60 * 24).toFixed(0);

    if (difference > 1) {
        return `Is ${difference} Days Away!`
    } else if (difference === 1) {
        return `Is ${difference} Day Away!`
    } else if (difference === 0) {
        return `Is Today!`
    } else {
        return `Has Expired`
    }
}

export { dateCountdown }