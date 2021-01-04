/* eslint-disable no-unused-vars */

import regeneratorRuntime from 'regenerator-runtime';
import sendDataToApi from '../helpers/sendDataToApi';

global.fetch = require('node-fetch');

describe('LeaderBoard', () => {
  it('Should POST player name and score', () => {
   sendDataToApi('Test Player', 10).then(result => {
      expect(result.result).toBe('Leaderboard score created correctly.');
    }).catch(err => err);
  })
})