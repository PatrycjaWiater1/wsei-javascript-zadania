document.addEventListener('DOMContentLoaded', function () {
    console.log("działa");
    let pictures = document.querySelectorAll('#gallery img');
    const hide = document.querySelector('#hideButton');
    const show = document.querySelector('#showButton');
    const input = document.querySelector('#tagInput');

    console.log(pictures);
    console.log(hide);
    console.log(show);
    console.log(input);

    show.addEventListener('click', function() {
        console.log("show works");

        let inputTxt = input.value;
        input.value = '';

        for (let i = 0; i < pictures.length; i++) {
            if (pictures[i].dataset.tag.indexOf(inputTxt) !== -1) {
                pictures[i].classList.remove('invisible');
                console.log(pictures[i].dataset.tag);
            }else {
                pictures[i].classList.add('invisible');
            }
        }
    })

    hide.addEventListener('click', function() {
        console.log("hide works");

        let inputTxt = input.value;
        input.value = '';

        for (let i = 0; i < pictures.length; i++) {
            if (pictures[i].dataset.tag.indexOf(inputTxt) !== -1) {
                pictures[i].classList.add('invisible');
                console.log(pictures[i].dataset.tag);
            } else {
                pictures[i].classList.remove('invisible');
            }
        }
    })
})