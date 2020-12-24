import 'phaser';

 
export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  backgroundColor:0x234728,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  }
};

