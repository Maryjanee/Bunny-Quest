// import createLeaderBoardTable from '../helpers/leaderBoardTable';

// describe('LeaderBoardTable Creation ', () => {
//   const results = document.querySelector('.results');
//   const apiData = [
//     { user: 'Maryjane', score: '30' },
//     { user: 'Daniel', score: '100' },
//     { user: 'Steve', score: '0' },
//     { user: 'Shola', score: '300' },
//     { user: 'Joe', score: '10' },
//     { user: 'jane', score: '30' },
//     { user: 'Mary', score: '50' },
//     { user: 'Dariel', score: '70' },
//     { user: 'Afole', score: '0' },
//     { user: 'Kay', score: '80' },
//     { user: 'Bisi', score: '40' },
//   ];
//   const bodyValue = document.getElementsByTagName('body');
//   const returnValue = createLeaderBoardTable(apiData);
//   it('should create a table element', () => {
//     const results = bodyValue.find('.results');
//     const table = results.find('table');
//     expect(table).toBe(true);
//   });
//   // it('should convert the score property to a number', () => {
//   //   expect(typeof returnValue[0].score).not.toBe('string');
//   //   expect(typeof returnValue[0].score).toBe('number');
//   // });
//   // it('should return a sorted array of objects in descending order of scores', () => {
//   //   expect(returnValue).toStrictEqual(sortedData);
//   // });
// });