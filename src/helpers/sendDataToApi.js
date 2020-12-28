export default function sendDataToApi(name, score) {
  const data = {
    name: 'Bunny Quest',
    user: name,
    score,
  };

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iy8gwhVatNBXYEvndkqk/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch((error) => {
     return error
    });
}