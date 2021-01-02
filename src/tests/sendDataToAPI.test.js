import regeneratorRuntime from "regenerator-runtime";
import sendDataToApi from '../helpers/sendDataToApi';
 global.fetch = require("node-fetch");

describe('Sending Scores To the API', ()=>{
  it('Creates data in the leaderboard API', async()=>{
    const data = await sendDataToApi('wale', 20); 
    expect(data).toBe('Leaderboard score created correctly.')
  });

})
