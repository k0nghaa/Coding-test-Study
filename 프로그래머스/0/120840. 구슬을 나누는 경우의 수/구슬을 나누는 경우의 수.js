function solution(balls, share) {
  const factorial = (n) => {
    let result = 1n;
    for (let i = 1n; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const b = BigInt(balls);
  const s = BigInt(share);

  return Number(factorial(b) / (factorial(b - s) * factorial(s)));
}