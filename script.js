//your code here
let item = document.getElementById('item-name-input');
let price = document.getElementById('item-price-input');
let add = document.getElementById('add');
let table = document.getElementById('table');

function addElement() {
    let row = document.createElement('tr');
    let data1 = document.createElement('td');
    let data2 = document.createElement('td');
   data1 = item.value;
   data2 = price.value;
    row.append(data1);
    row.append(data2);
    table.append(row);

    console.log(data1);
    console.log(data2);
}

add.addEventListener('click', addElement);
