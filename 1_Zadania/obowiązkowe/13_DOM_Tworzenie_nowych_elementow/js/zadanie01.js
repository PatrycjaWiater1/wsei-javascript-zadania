document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('.button');
    let menu = document.querySelector('.menu');
    let counter = 1;
    button.addEventListener('click', function() {
        let element = document.createElement('li');
        element.innerText = 'Number of elements: ' + counter++;
        menu.appendChild(element);
    });
});