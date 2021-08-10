import logo from '../client/media/wanderlust-logo.png'
import styles from './styles/style.scss'
import base from './styles/_base.scss'
import { submitForm } from './js/submit'

const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', e => {
  submitForm(e)
  console.log('button was clicked');
})

// todo- create countdown

export {
  logo,
  styles,
  base,
  submitForm
}