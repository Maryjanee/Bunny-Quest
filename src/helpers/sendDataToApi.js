/* eslint-disable no-unused-vars */
import regeneratorRuntime from 'regenerator-runtime';

const sendDataToApi = (name, score) => {
  async function PostData() {
    const data = {
      name: 'Bunny Quest',
      user: name,
      score,
    };
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iy8gwhVatNBXYEvndkqk/scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json.result;
    } catch (e) {
      return e;
    }
  }

  return PostData();
};


export default sendDataToApi;