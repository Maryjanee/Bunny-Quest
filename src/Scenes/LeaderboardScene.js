import "phaser";
import Button from "../Objects/Button"

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super("Leaderboard");
  }

  create() {
    this.retrieveUsers();
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
     
  }
  update(){
    if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
      location.reload()
    }
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
    const thead = document.createElement("thead");
    const tbody = document.createElement("thead");
    const tableHeadings = document.createElement("tr");
    tableHeadings.innerHTML = `
                                <th>Rank</th>
                               <th>Username</th>
                               <th>Score</th>`;
    thead.appendChild(tableHeadings)
    table.appendChild(thead);

    arr.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.user}</td>
                       <td>${user.score}</td>`;
      tbody.appendChild(row);
      table.appendChild(tbody);
    });

    document.querySelector('.results').appendChild(table);
  }
}
