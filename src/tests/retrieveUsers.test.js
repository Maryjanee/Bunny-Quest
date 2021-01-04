import regeneratorRuntime from "regenerator-runtime";
import retrieveUsers from '../helpers/retrieveUsers';
 global.fetch = require("node-fetch");

 describe('Get Users', () => {
   
  it('Data retrieved to be defined', () => {
    retrieveUsers().then(data => {
      expect(data.result).toBeDefined();
    }).catch(err => err);
  });
  
  it('Data retrieved to contain an Array of all players', () => {
    retrieveUsers().then(data => {
      expect(data.result).toContain(Array);
    }).catch(err => err);
  });
  
})
