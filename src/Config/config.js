import Phaser from 'phaser';


export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  backgroundColor: 0x51d0de,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};
