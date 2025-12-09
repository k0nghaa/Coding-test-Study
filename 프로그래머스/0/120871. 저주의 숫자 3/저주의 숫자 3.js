function solution(n) {
  let count = 0;
  let i = 1;

  while (true) {
    if (i % 3 === 0 || String(i).includes("3")) {
      i++;
      continue;
    }

    count++;

    if (count === n) return i;

    i++;
  }
}