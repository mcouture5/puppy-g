/**
 *
 * This is a simple state template to use for getting a Phaser game up
 * and running quickly. Simply add your own game logic to the default
 * state object or delete it and make your own.
 *
 */

var state = {
    init: function() {
        // Add the first state - preload
        this.game.state.add('preload', Preload);
    },
    preload: function() {
    	this.game.state.start('preload');
    }
};

var game = new Phaser.Game(
    800,
    480,
    Phaser.AUTO,
    'game',
    state
);