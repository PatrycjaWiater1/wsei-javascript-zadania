document.addEventListener('DOMContentLoaded', function () {

    let invoice = document.querySelector('#invoiceData');
    let checkbox = document.querySelector('#invoice');
    invoice.style.display = 'none';

    checkbox.addEventListener('change', function(check) {
        if  (check.target.checked) {
            invoice.style.display = 'block';
        } else {
            invoice.style.display = 'none';
        }
    });
});