/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("Działa");

    let galery = document.querySelectorAll('.galery li');
    const body = document.getElementsByTagName('body')[0];

    console.log(galery);
    console.log(body);

    galery.forEach(e => {
        e.addEventListener('click', function () {

            let div = document.createElement('div');
            div.classList.add('fullScreen');
            let img = document.createElement('img');
            img.setAttribute('src', this.children[0].getAttribute('src'));
            div.appendChild(img);
            let closeBtn = document.createElement('button');
            closeBtn.classList.add('close');
            closeBtn.innerHTML = 'Go Back';
            div.appendChild(closeBtn);
            body.appendChild(div);
    
            const closeButton = document.querySelector('.close');
            closeButton.addEventListener('click', function() {
                const back = document.querySelector('.fullScreen');
                back.parentNode.removeChild(back);
            });
            console.log(closeButton);

        });
    })

})