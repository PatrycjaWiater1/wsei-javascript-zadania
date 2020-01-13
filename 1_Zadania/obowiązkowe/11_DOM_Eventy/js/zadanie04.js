document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('button');
    var cntr = document.querySelector('.counter');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            cntr.innerHTML++;
        })
    })
    
});