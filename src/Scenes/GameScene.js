
import 'phaser';
import Player from './Player'

 console.log(Player)
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
  this.load.tilemapTiledJSON('map', 'src/assets/crystal_world_map.json');
  this.load.image('tiles-1', 'src/assets/main_lev_build_1.png');
  this.load.image('tiles-2', 'src/assets/main_lev_build_2.png');
  this.load.image('sparky', 'src/assets/player/movements/idle01.png');
    
  }

 
  create () {
    const map = this.createMap();
    const layers = this.createLayers(map);
    this.player = this.createPlayer()
  //  map.createStaticLayer('environment', tileset1);
    this.physics.add.collider(this.player, layers.platformsColliders);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.playerSpeed = 200;
    

 

  }
 
  createMap(){
    const map = this.make.tilemap({key: 'map'});
    map.addTilesetImage('main_lev_build_1', 'tiles-1')
    return map;
  }
  createLayers(map){
    const tileSet =  map.getTileset('main_lev_build_1');
    const platformsColliders = map.createStaticLayer('platforms_colliders', tileSet);
    const platforms = map.createStaticLayer('platforms', tileSet)

    platformsColliders.setCollisionByProperty({collides:true});
    return {platforms, platformsColliders}
  }
  createPlayer(){
    return new Player (this, 100, 230)
   
  
  }
 
    
};