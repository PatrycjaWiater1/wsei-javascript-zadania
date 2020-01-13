const children = document.querySelectorAll('.children');
console.log(children);
const parents = document.querySelectorAll('.parent');
console.log(parents);

parents.forEach(p => {
    p.addEventListener('mouseenter', function() {
        this.children[0].style.display = 'block';
    });
});
parents.forEach(p => {
    p.addEventListener('mouseleave', function() {
        (function hideChildrenElement(hide) {
            hide.children[0].style.display = 'none';
        })(this);
    });
});

