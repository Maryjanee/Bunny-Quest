import 'phaser';

 
export default {
  type: Phaser.AUTO,
  width: 1400,
  height: 600,
  backgroundColor: "#a0a0dd",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      enableBody: true,
    }
  },  scale: {

    autoCenter: Phaser.Scale.CENTER_BOTH
  }
  
};

