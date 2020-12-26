import 'phaser';
import Button from '../Objects/Button';


 
export default class LeaderboardScene extends Phaser.Scene {
  constructor () {
    super('Leaderboard');
  }
  
 

  create () {
    this.add.text(150, 250, 'Leaderboard Page')
    
} 

  
 
  
};