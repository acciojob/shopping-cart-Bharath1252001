let btn = document.getElementById("add");

let inputname = document.getElementById("item-name-input").value;
let price = document.getElementById("item-price-input").value;

btn.addEventListener('click',(e) => {
    let pname =inputname.value;
    console.log(pname);
    console.log(price.value);
});