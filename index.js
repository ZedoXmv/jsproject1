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
	constructor() {
		this._cartItems = [];
		this._gstRate = 6; //6% default rate can be changed
	}

	addItem(ItemCode,Qty) {
		let itemIndex = ItemsData.map(function(item) { 
			return item.itemCode; 
		}).indexOf(ItemCode);
		// console.log(ItemsData[itemIndex]);
		let Total =  Qty * ItemsData[itemIndex].itemRate;
		let GST = 0;
		if (ItemsData[itemIndex].GSTApplicable) {
			GST = Math.round((((Total/100)*this._gstRate) + Number.EPSILON) * 100) / 100; //Fancy Math to calculate and round gst to 2 dp
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
	get cartItems()	{ 
		return this._cartItems; 
	}
	getNumberOfItems() {
		return this._cartItems.length
	}
	get cartTotal() {
		let _cartTotal = 0;
		for (const item of this._cartItems) {
			_cartTotal += item.Total;
		}
		return _cartTotal;
	}

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
	set gstRate(value){
		this._gstRate = value;
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

}

//console.table(ItemsData);
const cart = new carts();
cart.gstRate = 6;

//cartObject.addItem(item code , qty);
cart.addItem(1,12);
cart.addItem(2,3);
cart.addItem(3,4);
cart.addItem(4,1);


//cartObject.removeItem(item code);
cart.removeItem(4);


console.log('You have ' + cart.getNumberOfItems() + ' items in your cart');
console.table(cart.cartItems);
console.log('----------------------------');
console.log(`Subtotal: ${cart.cartTotal}`);
console.log(`+${cart.gstRate}% GST: ${cart.gstTotal}`);
console.log(`GrandTotal: ${cart.cartTotal + cart.gstTotal}`);
console.log('----------------------------');