import Phaser from 'phaser';


 class Player extends Phaser.Physics.Arcade.Sprite{
  constructor(scene, x, y){
    super(scene, x, y, 'sparky')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    
  }
  
}

export default Player;