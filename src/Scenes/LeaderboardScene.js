import "phaser";
import Button from "../Objects/Button"

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super("Leaderboard");
  }

  create() {
    this.add.text(150, 250, "Leaderboard Page");
    this.retrieveUsers();
  }

  retrieveUsers() {
    fetch(
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iy8gwhVatNBXYEvndkqk/scores/"
    )
      .then((response) => response.json())
      .then((data) => {
        const allUsers = data.result;
        const topUsers = this.sortTopTenGamers(allUsers);
        this.createLeaderBoardTable(topUsers);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  sortTopTenGamers(arr) {
    const convertedScores = arr.map(hs => ({ user: hs.user, score: Number(hs.score)}));
    console.log("before sort", convertedScores.slice(0, 10));
    convertedScores.sort((a, b) => b.score - a.score);
    console.log("after sort", convertedScores.slice(0, 10));
    return convertedScores.slice(0, 10);
  }

  createLeaderBoardTable(arr) {
    const table = document.createElement("table");
    const tableHeadings = document.createElement("tr");
    tableHeadings.innerHTML = `
                                <th>Rank</th>
                               <th>Username</th>
                               <th>Score</th>`;

    table.appendChild(tableHeadings);

    arr.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${user.user}</td>
                       <td>${user.score}</td>`;
      table.appendChild(row);
    });

    document.querySelector('.results').appendChild(table);
  }
}
