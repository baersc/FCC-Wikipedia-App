/* eslint-env browser */
import { MDCRipple } from '@material/ripple';
import { MDCTextfield } from '@material/textfield';
import './style.scss';

window.onload = () => {
    const buttons = document.getElementsByClassName('mdc-button');

    for (let i = 0; i < buttons.length; i += 1) {
        MDCRipple.attachTo(buttons[i]);
    }

    MDCTextfield.attachTo(document.querySelector('.mdc-textfield'));
};
