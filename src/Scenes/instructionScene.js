
import Phaser from 'phaser';

import Button from '../Objects/Button';


export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Instruction');
  }

  create() {
    this.add.text(90, 200, 'Help the bunny eat as many carrots as possible without falling into oblivion. ', { fill: '#ffffff', fontSize: '14px' });
    this.add.text(90, 270, 'Use the Spacebar key to jump and the left and right arrow keys to move sideways', { fill: '#ffffff', fontSize: '14px' });


    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}