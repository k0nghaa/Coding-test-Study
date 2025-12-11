function solution(score) {
  const avg = score.map(([a, b]) => (a + b) / 2);
  const sorted = avg.slice().sort((a, b) => b - a);
  const ranks = avg.map(el => sorted.indexOf(el) + 1);

  return ranks;
}