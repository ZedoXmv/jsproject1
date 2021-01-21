const Items = [];

let grandTotal = 0;
  
function addItem(Name,Qty,Rate) {
    Items.push({
        Qty,
        Name,
        Rate,
        Total: Qty*Rate
    });
}
function addToTotal(value) {
    grandTotal += value;
}


addItem('eggs',12,1.5);
addItem('bread',3,24);
addItem('milk',4,15);
addItem('pizza',1,100);

//log items
console.log('You have ' + Items.length + ' items in your cart');
console.log('---------------------------------');
console.log('The items in your cart are:');
console.table(Items);

//Calucate and log total
Items.forEach(Item => addToTotal(Item.Total));
console.log("Your grand total is " + grandTotal);