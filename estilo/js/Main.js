export default class Main extends Phaser.Scene {
	constructor() {
	    super({ key: 'main' });
	}
	preload() {  
	  	this.load.image('capainferior', 'assets/fondos/layers/1.png');
	}
	create() {
		  this.capainfe = this.add.tileSprite(0, 0, this.game.config.width*2, this.game.config.height*2, 'capainferior');
	}

	update(titleme, delta) {
	    this.capainfe.tilePositionX += 0.2
	}
}