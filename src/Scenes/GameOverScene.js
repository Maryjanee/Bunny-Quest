import 'phaser';
import Button from '../Objects/Button';


 
export default class GameOverScene extends Phaser.Scene {
  constructor () {
    super('GameOver');
  }
  
  init (carrotsCollected){
   this.carrotsCollectedCount = carrotsCollected.score;
}

  create () {
    this.add.text( 150, 250, `GameOver , Your score is ${this.carrotsCollectedCount - 1}`, {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('GameOver')
			this.scene.start('GameScene')
    })
    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
	}
   
  
 
  
};