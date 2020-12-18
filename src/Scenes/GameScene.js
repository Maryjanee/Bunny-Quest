
import 'phaser';

 
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
    const layers = this.createPlatforms(map);
     this.createPlayer()
  //  map.createStaticLayer('environment', tileset1);
 

  }
  createMap(){
    const map = this.make.tilemap({key: 'map'});
    map.addTilesetImage('main_lev_build_1', 'tiles-1')
    return map;
  }
  createPlatforms(map){
    const tileSet =  map.getTileset('main_lev_build_1')
    const platforms = map.createStaticLayer('platforms', tileSet);
    return platforms
  }
  createPlayer(){
    const player = this.physics.add.sprite(100, 230, 'sparky')
    player.setGravityY(500);
    player.setCollideWorldBounds(true)
  }
 
    
};