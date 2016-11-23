var Menu = function (game){
};

Menu.prototype = {
	init: function (params){
		game.state.add('play', Play);
	},
	preload: function (){
		console.log('menu');
    	//game.state.start('play');
	},
	create: function (){
        // Create simple text display for current Phaser version
        var text = "Phaser Version "+Phaser.VERSION + " works!";
        var style = { font: "24px Arial", fill: "#fff", align: "center" };
        
        var t = game.add.text(this.world.centerX, this.world.centerY, text, style);
        t.anchor.setTo(0.5, 0.5);
	}
};