document.addEventListener('DOMContentLoaded', function() {

    const addBtn = document.querySelector('#addBtn');
    const ordersTable = document.querySelector('#orders');

    addBtn.addEventListener('click', function() {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.innerText = document.querySelector('#orderId').value;
        td2.innerText = document.querySelector('#item').value;
        td3.innerText =  document.querySelector('#quantity').value;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        ordersTable.appendChild(tr);
    });
});