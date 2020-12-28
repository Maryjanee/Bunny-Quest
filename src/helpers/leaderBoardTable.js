export default function createLeaderBoardTable(arr) {
  const results = document.querySelector('.results');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('thead');
  const tableHeadings = document.createElement('tr');
  const message = document.createElement('p');
  message.innerText = 'Press Spacebar to Reload Game';
  tableHeadings.innerHTML = `
                                <th>Rank</th>
                               <th>Username</th>
                               <th>Score</th>`;
  thead.appendChild(tableHeadings);
  table.appendChild(thead);

  arr.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.user}</td>
                       <td>${user.score}</td>`;
    tbody.appendChild(row);
    table.appendChild(tbody);
  });

  results.appendChild(table);
  results.appendChild(message);
}