document,addEventListener('DOMContentLoaded', function() {
    let moveBtn = document.querySelectorAll('.moveBtn');
    let listOne = document.querySelector('#list1');
    let listTwo = document.querySelector('#list2');

    moveBtn.forEach(button => {
        button.addEventListener('click', function() {

            if (this.parentNode.parentNode == listOne) {
                listOne.removeChild(this.parentNode);
                listTwo.appendChild(this.parentNode);
            }
            else {
                listTwo.removeChild(this.parentNode);
                listOne.appendChild(this.parentNode);
            }
        });
    });
});