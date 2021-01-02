import sortTopTenGamers from './sortTopGamers';
import createLeaderBoardTable from './leaderBoardTable';

const retrieveUsers = () => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iy8gwhVatNBXYEvndkqk/scores/',
  )
    .then((response) => response.json())
    .then((data) => {
      const allUsers = data.result;
      const topUsers = sortTopTenGamers(allUsers);
      createLeaderBoardTable(topUsers);
    })
    .catch((error) => error);
}

export default retrieveUsers; 