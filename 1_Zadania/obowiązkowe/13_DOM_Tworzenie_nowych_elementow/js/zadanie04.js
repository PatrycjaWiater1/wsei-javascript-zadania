document,addEventListener('DOMContentLoaded', function() {
    
    const list = document.querySelector('.list');
    let removeBTN = document.querySelector('#remove');

    removeBTN.addEventListener('click', function() {
        while(list.firstChild) {
            list.removeChild(list.firstChild);
        }
    });
});