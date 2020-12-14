
import 'phaser';

 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    // load images
    this.load.image('bunny', 'src/assets/bunny.png');
  }
 
  create () {
    let bunnyImage = this.physics.add.sprite(200, 300, 'bunny');
    bunnyImage.setScale(0.05)
  }
};