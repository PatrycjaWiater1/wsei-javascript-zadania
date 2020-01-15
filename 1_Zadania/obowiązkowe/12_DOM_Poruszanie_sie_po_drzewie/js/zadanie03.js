document.addEventListener('DOMContentLoaded', function() {

    const lists = document.querySelectorAll('.listContainer');

    lists.forEach(list => {
        list.addEventListener('mouseenter', function() {
            let item = this.children[0];
            item.children[0].style.color = 'red';
            item.children[item.children.length - 1].style.color = 'blue';
            
            for(let i = 1; i < item.children.length - 1; i++){
                item.children[i].style.color = 'green';
            }
        });
    });
});