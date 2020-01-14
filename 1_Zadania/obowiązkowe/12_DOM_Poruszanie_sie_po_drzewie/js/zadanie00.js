document.addEventListener('DOMContentLoaded', function() {
        var one = document.querySelector('.first').children[0].children[2];
        console.log(one);

        var two = document.querySelector('.second').parentNode.children[3];
        console.log(two);

        var three = document.querySelector('[data-ex="third"]').parentElement.parentElement;
        var childrenLast = third.children[third.children.length - 1];
        var childrenFirst = childrenLast.children[0];
        var middle = childrenFirst.children[Math.floor(childrenFirst.children.length / 2)];
        
        var four = document.querySelector('.forth').parentNode;

        console.log(three);
        console.log(childrenLast);
        console.log(childrenFirst);
        console.log(middle);
        console.log(four);
});