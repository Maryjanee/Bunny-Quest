
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
     const platforms = map.createStaticLayer('Platforms', tileset, 0, 200);
     
     this.player = this.physics.add.sprite(50, 300, 'player');
     this.player.setBounce(0.1);
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
  
    
   
  
  
};