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



  retrieveUsers(){
      fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iy8gwhVatNBXYEvndkqk/scores/'
    )
    .then(response => response.json())
    .then(data => {
      const allUsers = data.result
      const topUsers = this.sortTopTenGamers(allUsers);
      this.createLeaderBoardTable(topUsers)
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }
  
  sortTopTenGamers(arr){
   return arr.sort((a,b) => b-a).slice(0,10);
    
  }
  
  createLeaderBoardTable(obj){
    const table = document.createElement('table');
    const tableHeadings = document.createElement('tr');
    tableHeadings.innerHTML = `<th>Rank</th>
                               <th>Username</th>
                               <th>Score</th>`;
                              
    table.appendChild(tableHeadings);  
      
    obj.forEach((user, index) =>{
      const row = document.createElement('tr');
      row.innerHTML = `<th>${index + 1}</th>
      <th>${user.name}</th>
                       <th>${user.score}</th>`;
      table.appendChild(row);                 
      });
      
      return table;
      
  }
  


};