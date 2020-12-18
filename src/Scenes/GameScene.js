
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
    const layers = this.createLayers(map);
    const player = this.createPlayer()
  //  map.createStaticLayer('environment', tileset1);
    this.physics.add.collider(player, layers.platformsColliders);
 

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

    platformsColliders.setCollisionByExclusion(-1, true);
    return {platforms, platformsColliders}
  }
  createPlayer(){
    const player = this.physics.add.sprite(100, 230, 'sparky')
    player.setGravityY(500);
    player.setCollideWorldBounds(true)
    return player;
  }
 
    
};