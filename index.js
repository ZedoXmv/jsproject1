//"use strict"
/*
let item1 = 'eggs';
let item2 = 'bread';
let item3 = 'milk';


let item1qty = 12;
let item2qty = 3;
let item3qty = 4;

let item1price = 1.5;
let item2price = 24;
let item3price = 15;
*/

//let items = ['eggs','bread','milk'];
//let itemQty = [12,3,4];
//let itemPrice = [1.5,24,15];
let items = [];
let itemQty = [];
let itemPrice = [];


let cartTotal = 0;
let cartItems = {};


let cartQty = 'qty';

function addItem(newItemName,newItemQty,newItemPrice) {
    items.push(newItemName);
    itemQty.push(newItemQty);
    itemPrice.push(newItemPrice);
}
function addTotal(qty,price) {
    let itemprice = qty * price;
    cartTotal += itemprice;
}

function addToCart(item,qty,price) {
    let itemprice = qty * price;
    cartTotal += itemprice;
    cartItems[item]={
        [cartQty]:qty,
        price,
        Total : itemprice
    };
}



//addItem(name,qty,price)
addItem('eggs',12,1.5);
addItem('bread',3,24);
addItem('milk',4,15);


console.log('You have ' + items.length + ' items in your cart');
console.log('---------------------------------');
console.log('The items in your cart are:');

for (let i = 0; i < items.length; i++) {
    console.log(itemQty[i]+ " - " + items[i] + " for " + itemQty[i]*itemPrice[i] + " (Price: " + itemPrice[i] + ")");
    addTotal(itemQty[i],itemPrice[i]);
}
console.log('---------------------------------');
// addToCart(items[0],itemQty[0],itemPrice[0]);
// addToCart(items[1],itemQty[1],itemPrice[1]);



//console.log(cartItems);
console.log("Your grand total is " + cartTotal);