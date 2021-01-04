/* eslint-disable consistent-return */
import sortTopTenGamers from './sortTopGamers';
import createLeaderBoardTable from './leaderBoardTable';


async function retrieveUsers() {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iy8gwhVatNBXYEvndkqk/scores/',
    );
    const json = await response.json();
    const allUsers = json.result;
    const topUsers = sortTopTenGamers(allUsers);
    createLeaderBoardTable(topUsers);
  } catch (e) {
    return e;
  }
}
retrieveUsers();

export default retrieveUsers;