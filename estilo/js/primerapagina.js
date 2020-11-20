import Main from './Main.js';

var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    pixelArt: true,
    parent: 'nuestrofondo',
    input: {
        gamepad: true
    },
    
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Main],
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
