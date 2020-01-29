document.addEventListener('DOMContentLoaded', function () {
    console.log('Działa');

    const mainList = document.querySelectorAll('.list > ul > li');

    mainList.forEach(elem => {
        elem.addEventListener('mouseout', function() {
            if (typeof(this.children[0]) !== "undefined") {
                this.children[0].style.display = 'none';
            }
        });
        elem.addEventListener('mouseover', function() {
            if (typeof(this.children[0]) !== 'undefined') {
                this.children[0].style.display = 'block';
            }
        });
    });

});