document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.deleteBtn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            let cell = this.parentElement.parentElement;
            let cellBody = cell.parentElement;
            cellBody.removeChild(cell);
        })
    })
});