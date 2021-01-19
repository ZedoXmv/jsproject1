//"use strict"
let item1 = 'eggs';
let item2 = 'bread';
let item3 = 'milk';

let item1qty = 12;
let item2qty = 3;
let item3qty = 4;

let item1price = 1.5;
let item2price = 24;
let item3price = 15;

let cartTotal = 0;
let cartItems = {};


let cartQty = 'qty';
let cartPrice = 'price';

function addToCart(item,qty,price) {
    let itemprice = qty * price;
    cartTotal += itemprice;
    cartItems[item]={
        [cartQty]:qty,
        price,
        Total : itemprice
    }
}

addToCart(item1,item1qty,item1price);
addToCart(item2,item2qty,item2price);
addToCart(item3,item3qty,item3price);


console.log(cartItems);
console.log(cartTotal);