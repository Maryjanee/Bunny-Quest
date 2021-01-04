/* eslint-disable no-unused-vars */

import sendDataToApi from '../helpers/sendDataToApi';

global.fetch = require('node-fetch');

describe('LeaderBoard', () => {
  it('Should POST player name and score', () => {
    sendDataToApi('Test Player', 10).then(data => {
      expect(data.result).toBe('Leaderboard score created correctly.');
    }).catch(err => err);
  });
});