
import 'phaser';

 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    // load images
    this.load.image('sparky', 'src/assets/bunny.png')
    this.load.image('gameworld', 'src/assets/newback.png');
    this.load.image('platformLand', 'src/assets/landing.png')

    
  }
  createPlatforms(){
    
    
  }
 
  create () {
     let bunnySprite = this.physics.add.sprite(300, 150, 'sparky').setScale(0.05);
     const platforms = this.physics.add.staticGroup();
     platforms.create(300, 200, 'platformLand').setScale(0.5);
     this.physics.add.collider(bunnySprite, platforms);
  }
  
    
   
  
  
};