document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    console.log(buttons);
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
                if(this.nextElementSibling === 'null') {return; }
                this.nextElementSibling.classList.toggle('hidden');
        });
    });
});