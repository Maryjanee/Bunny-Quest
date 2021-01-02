const sortTopTenGamers = (arr) => {
  const convertedScores = arr.map(hs => ({ user: hs.user, score: Number(hs.score) }));
  convertedScores.sort((a, b) => b.score - a.score);
  return convertedScores.slice(0, 10);
}

export default sortTopTenGamers;