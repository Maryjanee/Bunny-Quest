import Phaser from 'phaser';

class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'birdman');

    scene.add.existing(this);
    scene.physics.add.existing(this)


    this.gravity = 500;
    this.speed = 150;

    this.body.setGravityY(this.gravity);
    this.setCollideWorldBounds(true);
    this.setSize(20, 45);
    this.setOffset(7, 20);
    this.setImmovable(true);
    this.setOrigin(0.5, 1);
    
  }
}
export default Enemy;