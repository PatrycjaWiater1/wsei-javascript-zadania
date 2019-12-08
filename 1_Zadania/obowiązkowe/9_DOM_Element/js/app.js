document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     //zad 0

     function getDatasInfo(elements) {

        let arr = [];
        for(let i = 0; i < elements.length; i++) {
            arr.push(elements[i].dataset);
        }
        return arr;
     }
     console.log(getDatasInfo(links));

     //zad1
     //console.log("zad1");
     console.log(homeElement);
     console.log(blocks);

     console.log(childElements);
     for(let i = 0; i < childElements.length; i++) {
         console.log(childElements[i].classList);
         console.log(childElements[i].tagName);
     }
     console.log(banner);
     for(let i = 0; i < banner.length; i++) {
         console.log(banner[i].classList);
         console.log(banner[i].tagName);
     }
     console.log(links);
     for(let i = 0; i < links.length; i++) {
         console.log(links[i].classList);
         console.log(links[i].tagName);
     }

     //zad2
     
     for(let i = 0; i < blocks.length; i++) {
         console.log(blocks[i].innerHTML);
         console.log(blocks[i].outerHTML);
     }
     for(let i = 0; i < blocks.length; i++) {
       blocks[i].innerHTML = 'Nowa wartość diva o klasie blocks';
    }
    for(let i = 0; i < blocks.length; i++) {
        console.log(blocks[i].innerHTML);
    }
    //outerHTML zwraca wynik wraz z nazwami tagów a innerHTML bez. 

    // zad3

    const mainFooter = document.querySelector('#mainFooter');
    console.log(mainFooter);

    function getId(element) {
        const elemId = element.getAttribute('id');
        console.log(elemId);
        return elemId;
    }
    getId(mainFooter);

    //zad 4

    function getTags(elements) {
        const arr = [];
        for(let i = 0; i < elements.length; i++) {
            arr.push(elements[i].tagName);
        }
        console.log(arr);
        return arr;
    }
    getTags(childElements);
});
