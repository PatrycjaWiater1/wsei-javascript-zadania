document.addEventListener('DOMContentLoaded', function() {
    var width = document.querySelector('#windowWidth');
    var height = document.querySelector('#windowHeight');

    window.addEventListener('resize', function() {
        width.innerHTML = this.innerWidth;
        height.innerHTML = this.innerHeight;
    });
});