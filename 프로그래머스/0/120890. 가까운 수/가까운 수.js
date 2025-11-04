function solution(array, n) {
  const distances = array.map(x => Math.abs(x - n));
  const min = Math.min(...distances);

  const candidates = array.filter((x, i) => distances[i] === min);
  return Math.min(...candidates);
}