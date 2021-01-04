import Phaser from 'phaser';
import Button from '../Objects/Button';
import sendDataToApi from '../helpers/sendDataToApi';


export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  init(carrotsCollected) {
    this.carrotsCollectedCount = carrotsCollected.score.toString();
  }

  create() {
    const form = document.querySelector('form');
    form.style.display = 'block';

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.input = document.querySelector('#user-input').value;
      if (this.input !== '') {
        this.add.text(150, 250, `GameOver ${this.input} , Your score is ${this.carrotsCollectedCount}`, { fill: '#000000', fontSize: '20px' });
        form.style.display = 'none';

        sendDataToApi(this.input, this.carrotsCollectedCount);

        this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Top Players', 'Leaderboard');
      } else if (typeof this.input === 'number' || this.input === '') this.add.text(150, 250, 'Please enter a valid name');
    });
  }
}