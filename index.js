ItemsData = [{
		itemCode: 1,
		itemName: 'eggs',
		itemRate: 1.5,
		GSTApplicable: true
	},
	{
		itemCode: 2,
		itemName: 'bread',
		itemRate: 24,
		GSTApplicable: false
	},
	{
		itemCode: 3,
		itemName: 'milk',
		itemRate: 15,
		GSTApplicable: true
	},
	{
		itemCode: 4,
		itemName: 'pizza',
		itemRate: 100,
		GSTApplicable: true
	}
];

class carts {
	constructor(gstRate = 6, cartItems = []) {
		this._cartItems = cartItems;
		this._gstRate = gstRate; //6% default rate can be changed
	}

	addItem(ItemCode,Qty) {
		let itemIndex = ItemsData.map(function(item) { 
			return item.itemCode; 
		}).indexOf(ItemCode);
		if(itemIndex === -1){
			//Invalid Item
			return console.log('Invalid Item');
		}
		//let found = ItemsData.find(item)
		// console.log(ItemsData[itemIndex]);
		let Total =  Qty * ItemsData[itemIndex].itemRate;
		let GST = 0;
		if (ItemsData[itemIndex].GSTApplicable) {
			GST = ((Total/100)*this._gstRate); //.toFixed() displayed
		}
		this._cartItems.push({
			'Item Code': ItemsData[itemIndex].itemCode,
			Qty,
			Name: ItemsData[itemIndex].itemName,
			Rate: ItemsData[itemIndex].itemRate,
			Total,
			GST
		});
	}

	removeItem(ItemCode) {
		let removeIndex = this._cartItems.map(function (item) {
			return item['Item Code'];
		}).indexOf(ItemCode);
		if (removeIndex === -1) {
			//No match in cart
			return false;
		}
		this._cartItems.splice(removeIndex, 1);
	}

	get cartItems()	{ 
		return this._cartItems; 
	}
	get cartTotal() {
		let _cartTotal = 0;
		for (const item of this._cartItems) {
			_cartTotal += item.Total;
		}
		return _cartTotal;
	}

	//GST related
	get gstTotal() {
		let _cartGST = 0;
		for (const item of this._cartItems) {
			_cartGST += item.GST;
		}
		return _cartGST;
	}
	get gstRate(){ 
		return this._gstRate;
	}
	// set gstRate(value){
	// 	this._gstRate = value;
	// }
	
}

console.table(ItemsData);
const cart = new carts(12);
// cart.gstRate = 12;

//cartObject.addItem(item code , qty);
cart.addItem(1,12);
cart.addItem(2,3);
cart.addItem(3,4);
cart.addItem(4,1);


//cartObject.removeItem(item code);
cart.removeItem(4);


console.log('You have ' + cart.cartItems.length + ' items in your cart');
console.table(cart.cartItems);
console.log('----------------------------');
console.log(`Subtotal: ${cart.cartTotal}`);
console.log(`+${cart.gstRate}% GST: ${cart.gstTotal}`);
console.log(`GrandTotal: ${cart.cartTotal + cart.gstTotal}`);
console.log('----------------------------');
