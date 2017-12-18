/* eslint-env browser */
import { MDCRipple } from '@material/ripple';
import { MDCTextfield } from '@material/textfield';
import './style.scss';


// Make boxes for search results
function makeSearch(result) {
    const page = document.getElementsByClassName('page')[0];
    const resultsDisp = document.createElement('div');
    const titleBar = document.createElement('div');

    resultsDisp.classList.add('search-container');
    titleBar.classList.add('search-title-bar', 'search-results');
    titleBar.textContent = 'Searched for: '.concat(result[0]);

    page.appendChild(resultsDisp);
    resultsDisp.appendChild(titleBar);

    for (let i = 0; i < result[1].length; i += 1) {
        const node = document.createElement('div');
        const title = '"'.concat(result[1][i], '"');
        const description = result[2][i];
        node.classList.add('search-item', 'search-results');
        node.innerHTML = title + description;
        titleBar.appendChild(node);
    }
}

// AJAX call to Wikipedia, returns 10 results
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

    if (window.XMLHttpRequest) {
        const searchRequest = new XMLHttpRequest();

        searchRequest.open('GET', url, true);
        searchRequest.send();
        searchRequest.onload = () => {
            makeSearch(JSON.parse(searchRequest.responseText));
            window.console.log(JSON.parse(searchRequest.responseText));
        };
    }
}

window.onload = () => {
    const buttons = document.getElementsByClassName('mdc-button');

    for (let i = 0; i < buttons.length; i += 1) {
        MDCRipple.attachTo(buttons[i]);
    }

    MDCTextfield.attachTo(document.querySelector('.mdc-textfield'));

    // Submit-Button
    document.getElementsByClassName('submit-button')[0]
        .addEventListener('click',
            () =>
                search(),
        );

    // Clear-Button
    document.getElementsByClassName('clear-button')[0]
        .addEventListener('click',
            () => {
                const page = document.getElementsByClassName('page')[0];
                const results = document.getElementsByClassName(
                    'search-container')[0];
                const input = document.getElementById('search-field');

                if (input.value !== '') {
                    input.value = '';
                    input.focus();
                }

                page.removeChild(results);
            });

    // Random-Button
    document.getElementsByClassName('random-button')[0]
        .addEventListener('click',
            () =>
                window.open('https://en.wikipedia.org/wiki/Special:Random'),
        );
};
