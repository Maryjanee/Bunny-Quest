/* eslint-disable  no-restricted-globals */
import Phaser from 'phaser';
import retrieveUsers from '../helpers/retrieveUsers';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    retrieveUsers();
    this.add.text(500, 600, 'Press Spacebar to reload Game', { fill: '#000000', fontSize: '20px' });
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      location.reload();
    }
  }
}
