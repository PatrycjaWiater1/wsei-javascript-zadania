document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector('.button');

    btn.addEventListener('click', function() {
        btn.parentNode.removeChild(btn);
    })
})
