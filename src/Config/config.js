import 'phaser';
import GameScene from '../Scenes/GameScene';
 
export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1380,
  height: 750,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 100 },
      enableBody: true,
    }
  }
  
};