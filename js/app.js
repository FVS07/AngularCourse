(function  () {

	var gem = {
		name: 'Azurita',
		price: 2.95,
		description: 'lorem ipsum dolor sit amet',
		canPurchase: false,
		soldOut: true,

	};
var app = angular.module('gemStore', []);
	
	app.controller('StoreController',function() {
		this.product = gem;
	
	})price
})();
