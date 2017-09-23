/* eslint-env browser */
import { MDCRipple } from '@material/ripple';
import { MDCFormField } from '@material/form-field';
import './style.scss';

window.onload = () => {
    const buttons = document.getElementsByClassName('mdc-button');
    for (let i = 0; i < buttons.length; i++) {
        MDCRipple.attachTo(buttons[i]);
    }
}
