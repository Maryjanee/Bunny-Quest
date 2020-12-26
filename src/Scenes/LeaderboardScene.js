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
      const allUsers = data.result
      const topTen = allUsers.sort((a,b) => b-a).slice(0,10);
      console.log(topTen)

    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }
  
  createLeaderBoardTable(obj){
    const table = document.createElement('table');
    const tableHeadings = document.createElement('tr');
    const name = document.createElement('th');
    name.innerText = 'Username';
    const score = document.createElement('th');
    score.innerText = 'Score';
    tableHeadings.appendChild(name);
    tableHeadings.appendChild(score);
    table.appendChild(tableHeadings)
    console.log(table);
    
  }


};