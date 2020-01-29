document.addEventListener('DOMContentLoaded', function() {
   console.log("działa");

   let nextBtn = document.querySelector('#nextPicture');
   let prevBtn = document.querySelector('#prevPicture');
   let list = document.querySelectorAll('.slider li');

   let counter = 0;

console.log(nextBtn);
console.log(prevBtn);
console.log(list);

list[counter].classList.add('visible');

nextBtn.addEventListener('click', function() {
    console.log("next clicked");
    list[counter].classList.remove('visible');
    counter++;
    if(counter >= list.length) {
        counter = 0;
    }
    list[counter].classList.add('visible');
})

prevBtn.addEventListener('click', function() {
    console.log("prev clicked");
    list[counter].classList.remove('visible');
    counter--;
    if(counter < 0) {
        counter = list.length-1;
    }
    list[counter].classList.add('visible');
})
// Problem: błąd kiedy kończą się obrazki. 

})