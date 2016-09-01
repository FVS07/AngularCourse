(function(){

	var gems = [
		{
			name: 'Azurite',
			price: '2.95',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum, iusto voluptates laudantium quam et repellendus facilis tenetur quasi ea, doloremque veritatis velit in, laboriosam quibusdam vero incidunt ipsam voluptatum.',
			canPurchase: false,
			soldOut: true,
			images:

					{id:0, url:'Documentos/tec2/img/gem-01.gif'}
					{id:1, url:'Documentos/tec2/img/gem-02.gif'}
					{id:2, url:'Documentos/tec2/img/gem-03.gif'}
		},
		{
			name: 'Bloodstone',
			price: '5.95',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum, iusto voluptates laudantium quam et repellendus facilis tenetur quasi ea, doloremque veritatis velit in, laboriosam quibusdam vero incidunt ipsam voluptatum.',
			canPurchase: false,
			soldOut: true,
			images:

					{id:0, url:'Documentos/tec2/img/gem-04.gif'}
					{id:1, url:'Documentos/tec2/img/gem-05.gif'}
					{id:2, url:'Documentos/tec2/img/gem-06.gif'}
		},
		{
			name: 'Zircon',
			price: '3.95',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum, iusto voluptates laudantium quam et repellendus facilis tenetur quasi ea, doloremque veritatis velit in, laboriosam quibusdam vero incidunt ipsam voluptatum.',
			canPurchase: false,
			soldOut: true,
			images:

					{id:0, url:'Documentos/tec2/img/gem-07.gif'}
					{id:1, url:'Documentos/tec2/img/gem-08.gif'}
					{id:2, url:'Documentos/tec2/img/gem-09.gif'}
		}	
	];

	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});
})();
