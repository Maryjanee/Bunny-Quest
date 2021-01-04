/* eslint-disable consistent-return */
import createLeaderBoardTable from '../helpers/leaderBoardTable';

describe('LeaderBoardTable Creation ', () => {
  beforeEach(() => {
    let div;
    jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
      switch (selector) {
        case '#results':
          div = document.createElement('div');
          div.setAttribute('id', 'results');
          div.dataset.testid = 'results';
          return div;
        default:
          break;
      }
    });
    jest.spyOn(document, 'getElementById').mockImplementation((selector) => {
      switch (selector) {
        case 'results':
          return div;
        default:
          break;
      }
    });
  });
  const apiData = [
    { user: 'Maryjane', score: '30' },
    { user: 'Daniel', score: '100' },
    { user: 'Steve', score: '0' },
    { user: 'Shola', score: '300' },
    { user: 'Joe', score: '10' },
    { user: 'jane', score: '30' },
    { user: 'Mary', score: '50' },
    { user: 'Dariel', score: '70' },
    { user: 'Afole', score: '0' },
    { user: 'Kay', score: '80' },
    { user: 'Bisi', score: '40' },
  ];

  it('should create a table element', () => {
    createLeaderBoardTable(apiData);
    const container = document.getElementById('results');
    expect(container).toMatchSnapshot();
  });
});
