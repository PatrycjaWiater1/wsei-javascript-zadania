/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener('DOMContentLoaded', function () {
    console.log("Działa");

    let tool = document.querySelectorAll('.tooltip');
    tool.forEach(element => {
        element.addEventListener('mouseover', function() {
            console.log("over");
            console.log(this.dataset.text);
            const span = document.createElement('span');
            span.classList.add('tooltipText');
            span.innerText = this.dataset.text;
            this.appendChild(span);
        });
    
        element.addEventListener('mouseout', function() {
            console.log("out");
            this.removeChild(this.children[0]);
        });
    });

});