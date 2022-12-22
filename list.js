let grandtotal = 0;
const addData = () => {
  console.log("add fucntion caled");
  let name = document.getElementById('item-name-input').value;
  let qty = document.getElementById('item-qty-input').value;
  let price = document.getElementById('item-price-input').value;
  //check function is the above values are empty or not.
  function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }
  isEmpty(name);
  isEmpty(qty);
  isEmpty(price);
  let table = document.getElementById('table1');
  let newRow = table.insertRow(table.rows.length - 1);
  let namecell = newRow.insertCell(0);
  let qtycell = newRow.insertCell(1);
  let pricecell = newRow.insertCell(2);
  let totalprice = newRow.insertCell(3);
  namecell.classList.add("item");
  totalprice.classList.add("price");
  namecell.innerHTML = name;
  qtycell.innerHTML = qty;
  pricecell.innerHTML = price;
  totalprice.innerHTML = qty * price;
  grandtotal += qty * price;
  document.getElementById('total').innerHTML = "Total Ammount " + grandtotal + " $";
  document.getElementById('myinputs').reset();
}

module.exports = addData;