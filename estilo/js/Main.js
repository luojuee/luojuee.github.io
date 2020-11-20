export default class Main extends Phaser.Scene {
	constructor() {
	    super({ key: 'main' });
	}
	preload() {  
		  this.load.image('capainferior', 'assets/fondos/layers/1.png');
		  this.load.image('segundacapa', 'assets/fondos/layers/2.png');
		  this.load.image('primeracapa', 'assets/fondos/layers/3.png');
	}
	create() {
		  this.capainfe = this.add.tileSprite(0, 0, this.game.config.width*2, this.game.config.height*2, 'capainferior');
		  this.capa2 = this.add.tileSprite(0, 0, this.game.config.width*2, this.game.config.height*2, 'segundacapa');
		  this.capa1 = this.add.tileSprite(0, 0, this.game.config.width*2, this.game.config.height*2, 'primeracapa');
	}

	update(titleme, delta) {
		this.capa1.tilePositionX += 0.6
		this.capa2.tilePositionX += 0.4
		this.capainfe.tilePositionX += 0.2
	}
}