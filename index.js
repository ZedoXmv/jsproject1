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
		GSTApplicable: false
	},
	{
		itemCode: 4,
		itemName: 'pizza',
		itemRate: 100,
		GSTApplicable: true
	}
];

function displayAllItems() {
	console.table(ItemsData);
}

class Carts {
	constructor() {
		this._cartItems = [];
		this.gstRate = 6; //6%
	}
	addItem(ItemCode,Qty) {
		let itemIndex = ItemsData.map(function(item) { 
			return item.itemCode; 
		}).indexOf(ItemCode);
		// console.log(ItemsData[itemIndex]);
		let Total =  Qty * ItemsData[itemIndex].itemRate;
		let GST = 0;
		if (ItemsData[itemIndex].GSTApplicable) {
			GST = Math.round((((Total/100)*this.gstRate) + Number.EPSILON) * 100) / 100; //Fancy Math to calculate and round gst to 2 dp
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
	get cartItems(){
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

//displayAllItems();
//console.table(ItemsData);
const Cart = new Carts();

Cart.addItem(1,12);
Cart.addItem(2,3);
Cart.addItem(3,4);
Cart.addItem(4,1);

Cart.removeItem(4);


console.log('You have ' + Cart.getNumberOfItems() + ' items in your cart');
console.table(Cart.cartItems);
console.log(`Subtotal: ${Cart.cartTotal}`);
console.log(`+${Cart.gstRate}% GST: ${Cart.gstTotal}`);
console.log(`GrandTotal: ${Cart.cartTotal + Cart.gstTotal}`);

console.log('-------------------------------------------------------');