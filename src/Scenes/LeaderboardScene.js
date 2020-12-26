import 'phaser';
import Button from '../Objects/Button';


 
export default class LeaderboardScene extends Phaser.Scene {
  constructor () {
    super('Leaderboard');
  }
  
 

  create () {
    this.add.text(150, 250, 'Leaderboard Page')
    this.returnTopGamers();
    
}

returnTopGamers(){
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iy8gwhVatNBXYEvndkqk/scores/'
)
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.log('Error:', error);
});
}

  
 
  
};