import Phaser from 'phaser';
import animation from './playeranims'


 class Player extends Phaser.Physics.Arcade.Sprite{
  constructor(scene, x, y){
    super(scene, x, y, 'sparky')
    scene.add.existing(this)
    scene.physics.add.existing(this);
    this.gravity = 500;
    this.playerSpeed = 200;
    this.noOfJumps = 0;
    
    this.body.setGravityY(this.gravity);
    this.setCollideWorldBounds(true)
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.setOrigin(0.5, 1);
    
    animation(this.scene.anims)
  }
  
  preUpdate(){
    const {left, right, space, up} = this.cursors;
    const spaceKeyPressed = Phaser.Input.Keyboard.JustDown(space);
    
    const onFloor = this.body.onFloor();
    
    if(left.isDown){
      this.setVelocityX(-this.playerSpeed);
      this.setFlipX(true)
    }else if(right.isDown){
      this.setVelocityX(this.playerSpeed)
      this.setFlipX(false)
    }else{
      this.setVelocityX(0)
    }
    if((spaceKeyPressed) && (onFloor || this.noOfJumps < 1)){
      this.setVelocityY(-this.playerSpeed * 1.8);
      this.noOfJumps++
    }
    if (onFloor){
      this.noOfJumps = 0

    }
    
    
     onFloor?
     this.body.velocity.x !== 0 ? this.anims.play('run', true): this.anims.play('idle', true): this.anims.play('jump', true)
  }

  
}

export default Player;