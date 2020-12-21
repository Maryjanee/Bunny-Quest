import Phaser from 'phaser';
import animation from './playeranims'


 class Player extends Phaser.Physics.Arcade.Sprite{
  constructor(scene, x, y){
    super(scene, x, y, 'sparky')
    scene.add.existing(this)
    scene.physics.add.existing(this);
    this.gravity = 500;
    this.playerSpeed = 200;
    this.body.setGravityY(this.gravity);
    this.setCollideWorldBounds(true)
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    
    animation(this.scene.anims)
  }
  
  preUpdate(){
    const {left, right} = this.cursors;
    if(left.isDown){
      this.setVelocityX(-this.playerSpeed)
    }else if(right.isDown){
      this.setVelocityX(this.playerSpeed)
    }else{
      this.setVelocityX(0)
    }
    this.anims.play('idle', true)
  }

  
}

export default Player;