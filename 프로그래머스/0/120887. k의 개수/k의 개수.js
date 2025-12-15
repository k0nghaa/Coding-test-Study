function solution(i, j, k) {
  let count = 0;
  const target = String(k);

  for (let num = i; num <= j; num++) {
    const digits = String(num).split("");

    digits.forEach(d => {
      if (d === target) count++;
    });
  }

  return count;
}