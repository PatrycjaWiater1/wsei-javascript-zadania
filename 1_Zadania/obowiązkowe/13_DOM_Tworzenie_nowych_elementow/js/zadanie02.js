document.addEventListener('DOMContentLoaded', function() {

<<<<<<< HEAD
    const ID = document.querySelector('#orderId');
    const item = document.querySelector('#item');
    const quantity = document.querySelector('#quantity');
=======
>>>>>>> d18c0f13b7f88d32fa47991bdf8a9d86f9b05701
    const addBtn = document.querySelector('#addBtn');
    const ordersTable = document.querySelector('#orders');

    addBtn.addEventListener('click', function() {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

<<<<<<< HEAD
        td1.innerText = ID.value;
        td2.innerText = item.value;
        td3.innerText = quantity.value;
=======
        td1.innerText = document.querySelector('#orderId').value;
        td2.innerText = document.querySelector('#item').value;
        td3.innerText =  document.querySelector('#quantity').value;
>>>>>>> d18c0f13b7f88d32fa47991bdf8a9d86f9b05701

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        ordersTable.appendChild(tr);
<<<<<<< HEAD
    })
=======
    });
>>>>>>> d18c0f13b7f88d32fa47991bdf8a9d86f9b05701
});