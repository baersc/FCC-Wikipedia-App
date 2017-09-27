/* eslint-env browser */
import { MDCRipple } from '@material/ripple';
import { MDCTextfield } from '@material/textfield';
import { MDCSimpleMenu } from '@material/menu';
import './style.scss';

let searchResult;

function search() {
    const query = document.getElementById('search-field').value;
    const url =
        'https://en.wikipedia.org/w/api.php?'
            .concat(
                'action=opensearch&',
                'format=json&',
                'origin=*&',
                'search=',
                query);

    window.console.log(query, url);

    if (window.XMLHttpRequest) {
        const searchRequest = new XMLHttpRequest();

        searchRequest.open('GET', url, true);
        searchRequest.send();
        searchRequest.onload = () => {
            searchResult = searchRequest.responseText;
            window.console.log(JSON.parse(searchResult));
        };
    }
}

window.onload = () => {
    const buttons = document.getElementsByClassName('mdc-button');
    const searchButton = document.getElementsByClassName('submit-button')[0];

    for (let i = 0; i < buttons.length; i += 1) {
        MDCRipple.attachTo(buttons[i]);
    }

    MDCTextfield.attachTo(document.querySelector('.mdc-textfield'));

    searchButton.addEventListener('click', () => search());
};
