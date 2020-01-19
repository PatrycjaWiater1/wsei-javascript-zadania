document.addEventListener('DOMContentLoaded', function() {

    let pictures = document.querySelectorAll('.page-header img');
    let list = document.querySelector('.form-control');
    let accept = document.querySelector('button');

    pictures.forEach(img => {
        img.style.display = "none";
      });

  accept.addEventListener("click", function(e) {
    e.preventDefault();
    let selectedIndex = list.selectedIndex;

    for (let i = 0; i < pictures.length; i++) {
      if (i === selectedIndex) {
        pictures[i].style.display = "block";
      } else {
        pictures[i].style.display = "none";
      }
    }
  });
})