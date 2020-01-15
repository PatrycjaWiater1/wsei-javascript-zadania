document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.button');

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.parentNode.style.backgroundColor = randomColor;
        });
    });

});