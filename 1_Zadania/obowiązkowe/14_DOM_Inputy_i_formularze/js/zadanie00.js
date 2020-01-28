document.addEventListener('DOMContentLoaded', function() {

    const email = document.querySelector('#email');
    const name = document.querySelector('#name');
    const surname = document.querySelector('#surname');
    const pass1 = document.querySelector('#pass1');
    const pass2 = document.querySelector('#pass2');
    const agree = document.querySelector('#agree');
    const err = document.querySelector('.error-message');
    

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        err.innerHTML = '';

        if (!checkEmail(email.value)) {
            err.innerHTML += 'Email musi posiadać znak @';
        }

        if (!checkName(name.value)) {
            err.innerHTML += 'Twoje imię jest za krótkie';
        }

        if (!checkSurname(surname.value)) {
            err.innerHTML += 'Twoje nazwisko jest za krótkie';
        }

        if (!checkPassword(pass1.value, pass2.value)) {
            err.innerHTML += 'Hasła nie są takie same lub puste';
        }

        if (!agree.checked) {
            err.innerHTML += 'Musisz zaakceptować warunki';
        }

        if (err.innerHTML !== '') {
            
        }

    });
    function checkEmail(email) {
        if (email.includes("@")) {
            return true;
        } else {
            return false;
        }
    }
    function checkName(name) {
        if (name.length <= 6){
            return false;
        } else {
            return true;
        }
    }
    function checkSurname(surname) {
        if (surname.length >= 6){
            return true;
        } else {
            return false;
        }
    }
function checkPassword(pass1, pass2) {
    if (pass1.length > 0 && pass2.length > 0 && pass1 === pass2) {
        return true;
    } else {
        return false;
    }

}
});