import logo from '../client/media/wanderlust-logo.png'
import styles from './styles/style.scss'
import base from './styles/_base.scss'
import media from './styles/media.scss'
import { submitForm } from './js/submit'
import { updateUI } from './js/updateUI'
import { dateCountdown } from './js/dateCountdown'
import { today } from './js/today'
import { validateForm } from './js/validator'

const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', e => {
  validateForm(e)
})
// sets input to today's date
let dateControl = document.querySelector('input[type="date"]');
dateControl.setAttribute('min', today());
dateControl.setAttribute('max', '2121-01-01')
dateControl.value = today();

export {
  logo,
  styles,
  base,
  media,
  submitForm,
  updateUI,
  dateCountdown,
  today
}