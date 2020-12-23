
import 'phaser';
import Player from './Player';
import Enemy from './Enemy';
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
  this.load.tilemapTiledJSON('map', 'src/assets/crystal_world_map.json');
  this.load.image('tiles-1', 'src/assets/main_lev_build_1.png');
  this.load.image('tiles-2', 'src/assets/main_lev_build_2.png');
  // this.load.image('sparky', 'src/assets/player/movements/idle01.png');
  this.load.spritesheet('sparky', 'src/assets/player/move_sprite_1.png', {frameWidth:32, spacing:32, frameHeight:38});
  this.load.spritesheet('birdman', 'src/assets/enemy/enemy_sheet.png', {
    frameWidth: 32, frameHeight: 64, spacing: 32
  })
  }

 
  create () {
    const map = this.createMap();
    const layers = this.createLayers(map);
    this.player = this.createPlayer();
    this.enemy = this.createEnemy();
  
    this.physics.add.collider(this.player, layers.platformsColliders);
    this.physics.add.collider(this.enemy, layers.platformsColliders);
    this.setUpCameras(this.player);
  

  }
 
  createMap(){
    const map = this.make.tilemap({key: 'map'});
    map.addTilesetImage('main_lev_build_1', 'tiles-1')
    return map;
  }
  createLayers(map){
    const tileSet =  map.getTileset('main_lev_build_1');
    const platformsColliders = map.createStaticLayer('platforms_colliders', tileSet);
    const platforms = map.createStaticLayer('platforms', tileSet);
  
    platformsColliders.setCollisionByProperty({collides:true});
    return {platforms, platformsColliders }
  }
  createPlayer() {
       return new Player(this, 80,336);
    }
    
    createEnemy() {
      return new Enemy(this, 200, 200);
    }
  
    // createEnemyColliders(enemy, { colliders }) {
    //   enemy
    //     .addCollider(colliders.platformsColliders)
    // }
    
  setUpCameras(player){
    this.physics.world.setBounds(0,0,this.width + 1600, 800)
    this.cameras.main.setBounds(0,0, this.width + 1600, 600).setZoom(1.5);
    this.cameras.main.startFollow(player)
  }

  
    
};