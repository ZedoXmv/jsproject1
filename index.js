const cartObject = {
    items: [],
};

let grandTotal = 0;

class CartClass {
    constructor(){
        this.items = [];
    }
    addItem(Name,Qty,Rate) {
        this.items.push({
            Qty,
            Name,
            Rate,
            Total: Qty*Rate
        });
    }

    getItems(){
        return this.items
    }
    getNumberOfItems(){
        return this.items.length
    }
    getTotalAmount(){
        let cartTotal = 0;
        for (const item of this.items) {
            cartTotal += item.Total;
        }
        return cartTotal;
    }

}

const cart = new CartClass();
cart.addItem('eggs',12,1.5);
cart.addItem('bread',3,24);
cart.addItem('milk',4,15);
cart.addItem('pizza',1,100);


console.log('You have ' + cart.getNumberOfItems() + ' items in your cart');
console.table(cart.getItems())
console.log("Your grand total is " + cart.getTotalAmount());