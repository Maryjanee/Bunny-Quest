
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
    this.load.image('background', 'src/assets/background.png');
    this.load.image('spike', 'src/assets/spike.png');
  // At last image must be loaded with its JSON
    this.load.atlas('player', 'src/assets/kenney_player.png','src/assets/kenney_player_atlas.json');
    this.load.image('tiles', 'src/assets/platformPack_tilesheet.png');
    // Load the export Tiled JSON
    this.load.tilemapTiledJSON('map', 'src/assets/level1.json');

    
  }
  createPlatforms(){
    
    
  }
 
  create () {
    //  let bunnySprite = this.physics.add.sprite(300, 150, 'sparky').setScale(0.05);
    //  const platforms = this.physics.add.staticGroup();
    //  platforms.create(300, 200, 'platformLand').setScale(0.5);
    //  this.physics.add.collider(bunnySprite, platforms);
    const backgroundImage = this.add.image(0, 0,'background').setOrigin(0, 0);
     backgroundImage.setScale(2, 0.8);
     const map = this.make.tilemap({ key: 'map' });
     const tileset = map.addTilesetImage('kenney_simple_platformer', 'tiles');
     const platforms = this.physics.add.staticGroup();
     platforms.create(225, 490, 'platformLand').setScale(1, .3).refreshBody();
    

     this.player = this.physics.add.sprite(50, 300, 'player');
     this.player.setBounce(0.1);
     this.cameras.main.setBounds(0, 0, 2000, 600);
     this.cameras.main.startFollow(this.player, true, 0.5, 0.5);
     this.player.setCollideWorldBounds(true);
     this.physics.add.collider(this.player, platforms);
     
     this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNames('player', {
          prefix: 'robo_player_',
          start: 2,
          end: 3,
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: 'idle',
        frames: [{ key: 'player', frame: 'robo_player_0' }],
        frameRate: 10,
      });
      this.anims.create({
        key: 'jump',
        frames: [{ key: 'player', frame: 'robo_player_1' }],
        frameRate: 10,
      });
      this.cursors = this.input.keyboard.createCursorKeys();
      
      
    
     
  }
  
  update(){
      // Control the player with left or right keys
if (this.cursors.left.isDown) {
    this.player.setVelocityX(-200);
    if (this.player.body.onFloor()) {
      this.player.play('walk', true);
    }
  } else if (this.cursors.right.isDown) {
    this.player.setVelocityX(200);
    if (this.player.body.onFloor()) {
      this.player.play('walk', true);
    }
  } else {
    // If no keys are pressed, the player keeps still
    this.player.setVelocityX(0);
    // Only show the idle animation if the player is footed
    // If this is not included, the player would look idle while jumping
    if (this.player.body.onFloor()) {
      this.player.play('idle', true);
    }
  }
  
  // Player can jump while walking any direction by pressing the space bar
  // or the 'UP' arrow
  if ((this.cursors.space.isDown || this.cursors.up.isDown) && this.player.body.onFloor()) {
    this.player.setVelocityY(-150);
    this.player.play('jump', true);
  }
  
  if (this.player.body.velocity.x > 0) {
    this.player.setFlipX(false);
  } else if (this.player.body.velocity.x < 0) {
    // otherwise, make them face the other side
    this.player.setFlipX(true);
  }
  }
   playerHit(player, spike) {
    player.setVelocity(0, 0);
    player.setX(50);
    player.setY(300);
    player.play('idle', true);
    player.setAlpha(0);
    let tw = this.tweens.add({
      targets: player,
      alpha: 1,
      duration: 100,
      ease: 'Linear',
      repeat: 5,
    });
  }
  
    
   
  
  
};