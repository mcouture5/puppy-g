var Preload = function (game){
};

Preload.prototype = {
	init: function (params){
		game.state.add('menu', Menu);
	},
	preload: function (){
		console.log('preload');
    	game.state.start('menu');
	}
};