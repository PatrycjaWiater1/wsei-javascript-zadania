document.addEventListener('DOMContentLoaded', function() {

    let btn = document.querySelector('.button');
    const list = document.querySelector('.list');

    btn.addEventListener('click', function() {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    })
})