document.addEventListener('DOMContentLoaded', function() {

    const name = document.querySelector('#name');
    const type = document.querySelector('#type');

    name.addEventListener('input', function(x) {
        type.innerHTML = getNameOfCard(name.value);
    });

    function getNameOfCard(e) {
        if (e.startsWith('4') && (e.length >= 13 && e.length <=16)) {
            name.style.backgroundColor = 'lightgreen';
            return 'Visa';
        } else if (e.startsWith('4')) {
            name.style.backgroundColor = '';
            return 'Visa';
        }  else if ((e.startsWith('34') || e.startsWith('37')) && e.length === 15) {
            name.style.backgroundColor = 'lightgreen';
            return 'American express';
        } else if (e.startsWith('34') || e.startsWith('37')) {
            name.style.backgroundColor = '';
            return 'American express';
        } else if (e.startsWith('5') && e.length === 16) {
            name.style.backgroundColor = 'lightgreen';
            return 'Mastercard';
        } else if (e.startsWith('5')) {
            name.style.backgroundColor = '';
            return 'Mastercard';
        }else {
            name.style.backgroundColor = '';
            return 'Nieznany typ karty';
        }
    }

});