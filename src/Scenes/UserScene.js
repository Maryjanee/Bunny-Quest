import 'phaser';

export default class UserScene extends Phaser.Scene {
  constructor () {
    super('User');
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