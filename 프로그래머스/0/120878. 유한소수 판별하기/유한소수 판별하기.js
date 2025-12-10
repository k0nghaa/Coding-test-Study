function solution(a, b) {
  function gcd(x, y) {
    while (y !== 0) {
      [x, y] = [y, x % y];
    }
    return x;
  }

  let g = gcd(a, b);
  b /= g;

  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}