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
        this.input = document.querySelector('#user-input').value;
        if(this.input !== ""){
          
    this.add.text( 150, 250, `GameOver ${this.input} , Your score is ${this.carrotsCollectedCount}`, {fill: '#000000', fontSize: '20px'})
    console.log(typeof this.carrotsCollectedCount)
    
   this.sendDataToApi(this.input, this.carrotsCollectedCount)
    
    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Score Board', 'Leaderboard');
  }
  else if(typeof this.input == "number" || this.input == "")
  
  this.add.text( 150, 250,"Please enter a valid name")
})
} 
  
sendDataToApi(name, score){
  const data = {name:"Bunny Quest", user: name, 
score:score };

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iy8gwhVatNBXYEvndkqk/scores', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.log('Error:', error);
});
}
 
  
};