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
     const form = document.querySelector('form');
    form.style.display ='block'
   
      form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const input = document.querySelector('#user-input').value;
        if(input !== ""){
          
    this.add.text( 150, 250, `GameOver ${input} , Your score is ${this.carrotsCollectedCount - 1}`, {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('GameOver')
			this.scene.start('GameScene')
    })
    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
  }
  else if(typeof input == "number" || input == "")
  
  this.add.text( 150, 250,"Please enter a valid name")
})
} 
  
 
  
};