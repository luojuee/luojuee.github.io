import Game from './Game.js';
import Menu from './Menu.js';
import TerMenu from './TerMenu.js';
import sceneSTOP from './sceneSTOP.js';

var config = {
    type: Phaser.AUTO,
    width: 1900,
    height: 850,
    pixelArt: true,
    parent: 'ourgame',
    input: {
        gamepad: true
    },
    
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Menu, Game, TerMenu, sceneSTOP],
              physics: { 
                  default: 'arcade', 
                  arcade: { 
                      gravity: { 
                         // y: 400 
                      }, 
                      debug: false 
                  }
              }
};
new Phaser.Game(config);
