<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    
    let buttons = document.querySelectorAll('.moveBtn');
    const list1 = document.querySelector('#list1');
    const list2 = document.querySelector('#list2');

    console.log(list1);

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            let li = this.parentNode;
            if (li.parentNode == list1) {
                list1.removeChild(li);
                list2.appendChild(li);
            } else {
                list2.removeChild(li);
                list1.appendChild(li);
            }
        });
    });


=======
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
>>>>>>> d18c0f13b7f88d32fa47991bdf8a9d86f9b05701
});