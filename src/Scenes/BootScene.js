import Phaser from 'phaser';


export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'src/assets/zenva_logo.png');
  }

  create() {
    const results = document.querySelector('#results');
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }
    this.scene.start('Preloader');
  }
}