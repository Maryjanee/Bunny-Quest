
import 'phaser';

 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
    
  }
 
  preload () {
    
  this.load.tilemapTiledJSON('map', 'src/assets/crystal_world_map.json');
  this.load.image('tiles-1', 'src/assets/main_lev_build_1.png');
  this.load.image('tiles-2', 'src/assets/main_lev_build_2.png');
    
  }

 
  create () {
   
   const map = this.make.tilemap({key: 'map'});
   const tileset1 = map.addTilesetImage('main_lev_build_1', 'tiles-1');
  //  const tileset2 = map.addTilesetImage('main_lev_build_2', 'tiles-2');
   
  //  map.createStaticLayer('environment', tileset1);
   map.createStaticLayer('platforms', tileset1);
    
    

  }
    
};