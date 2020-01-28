<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {

    let btn = document.querySelector('.button');
    const list = document.querySelector('.list');

    btn.addEventListener('click', function() {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    })
})
=======
document,addEventListener('DOMContentLoaded', function() {
    
    const list = document.querySelector('.list');
    let removeBTN = document.querySelector('#remove');

    removeBTN.addEventListener('click', function() {
        while(list.firstChild) {
            list.removeChild(list.firstChild);
        }
    });
});
>>>>>>> d18c0f13b7f88d32fa47991bdf8a9d86f9b05701
