document.addEventListener('DOMContentLoaded', function() {

    const ID = document.querySelector('#orderId');
    const item = document.querySelector('#item');
    const quantity = document.querySelector('#quantity');
    const addBtn = document.querySelector('#addBtn');
    const ordersTable = document.querySelector('#orders');

    addBtn.addEventListener('click', function() {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.innerText = ID.value;
        td2.innerText = item.value;
        td3.innerText = quantity.value;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        ordersTable.appendChild(tr);
    })
});