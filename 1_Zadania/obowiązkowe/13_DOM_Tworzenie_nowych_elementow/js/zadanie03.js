<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector('.button');

    btn.addEventListener('click', function() {
        btn.parentNode.removeChild(btn);
    })
})
=======
document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.button');
    btn.addEventListener('click', function() {
        this.parentElement.removeChild(this);
    });
});
>>>>>>> d18c0f13b7f88d32fa47991bdf8a9d86f9b05701
