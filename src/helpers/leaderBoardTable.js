/* eslint-disable consistent-return */
const createLeaderBoardTable = (arr) => {
  const results = document.querySelector('#results');
  const table = document.createElement('table');
  table.className = 'results-val';
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const tableHeadings = document.createElement('tr');
  const message = document.createElement('p');
  message.className = 'results-val';
  message.innerText = 'Press Spacebar to Reload Game';
  tableHeadings.innerHTML = `         
                               <th>Rank</th>
                               <th>Username</th>
                               <th>Score</th>`;
  thead.appendChild(tableHeadings);
  table.appendChild(thead);

  arr.forEach((user, index) => {
    const row = document.createElement('tr');

    row.className = 'score-data';
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.user}</td>
                       <td>${user.score}</td>`;
    tbody.appendChild(row);
    table.appendChild(tbody);
  });

  results.appendChild(table);
  results.appendChild(message);
};

export default createLeaderBoardTable;