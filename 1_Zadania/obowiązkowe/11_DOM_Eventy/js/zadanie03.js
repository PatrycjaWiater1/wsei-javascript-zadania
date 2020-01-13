document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('button');
    var cntrs = document.querySelectorAll('.counter');
    for(let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            let current = cntrs[i].innerHTML;
            current++;
            cntrs[i].innerHTML = current;
        });
    }
});