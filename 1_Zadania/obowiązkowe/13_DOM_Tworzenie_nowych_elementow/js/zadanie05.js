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


});