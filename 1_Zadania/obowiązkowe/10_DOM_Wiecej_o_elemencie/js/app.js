document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */


     // zad 0
     var ex5 = document.querySelectorAll('.ex5 li');
     console.log(ex5);

     for (let i = 0; i < ex5.length; i++) {
        if (i === 0 || i % 2 === 0) {
            ex5[i].style.backgroundColor = 'green';
        }
            ex5[4].classList.add('big');

        if (i === 0 || i % 3 === 0) {
            ex5[i].style.textDecoration = 'underline';
        }

        //zad 1

        var edge = document.querySelector('.edge');
        var chrome = document.querySelector('.chrome');
        var firefox = document.querySelector('.firefox');
        
        edge.style.backgroundImage = 'url("./assets/img/edge.png")';
        firefox.style.backgroundImage = 'url(./assets/img/firefox.png)';

        chrome.nextElementSibling.setAttribute('href', 'http://www.chrome.com')
        edge.nextElementSibling.setAttribute('href', 'http://www.edge.com')
        firefox.nextElementSibling.setAttribute('href', 'http://www.firefox.com')

        chrome.nextElementSibling.innerHTML = 'Chrome';
        firefox.nextElementSibling.innerHTML = 'Firefox';

        chrome.style.width = "100px"

        //zad 2

        const personalData = document.querySelector('#name');
        const favColor = document.querySelector('#fav_color');
        const favMeal = document.querySelector('#fav_meal');

        personalData.innerHTML = 'Patrycja Wiater';
        favColor.innerHTML = 'red';
        favMeal.innerHTML = 'lasagne';

        //zad 3

        const ul = document.querySelector('.ex3 ul');

        ul.classList.add('menu');

        for(let i = 0; i < ul.children.length; i++) {
            ul.children[i].classList.add('menyElement');
            ul.children[i].classList.remove('error');
        }

        //zad 4

        var ex4 = document.querySelectorAll('.ex4 li');
        for(let i = 0; i < exc4.length; i++){
            exc4[i].setAttribute('data-id', i++);
        }
    }

});