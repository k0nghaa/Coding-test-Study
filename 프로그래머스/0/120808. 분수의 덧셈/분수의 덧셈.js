function solution(numer1, denom1, numer2, denom2) {
  let newNumer = numer1*denom2 + numer2*denom1;
  let newDenom = denom1*denom2;

  let min = Math.min(newNumer, newDenom);
  let gcd = 1;

  for (let x = 1; x <= min; x++) {
    if (newNumer % x === 0 && newDenom % x === 0) {
      gcd = x;
    }
  }

  return [newNumer / gcd, newDenom / gcd];
}