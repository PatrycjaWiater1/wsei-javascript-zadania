document.addEventListener('DOMContentLoaded', function () {

    const box = document.querySelector('#box');
    const gX = document.querySelector('#globalX');
    const gY = document.querySelector('#globalY');
    const lX = document.querySelector('#localX');
    const lY = document.querySelector('#localY');

    box.addEventListener('mousemove', function(e) {
        gX.innerHTML = e.pageX;
        gY.innerHTML = e.pageY;
        lX.innerHTML = e.pageX - this.offsetLeft;
        lY.innerHTML = e.pageY - this.offsetTop;
    });

});