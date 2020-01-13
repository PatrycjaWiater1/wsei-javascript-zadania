document.addEventListener('DOMContentLoaded', function () {

    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        });
    });

});