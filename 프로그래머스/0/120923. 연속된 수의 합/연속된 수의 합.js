function solution(num, total) {
  let result = [];

  if (num % 2 === 1) {
    let mid = total / num;
    for (let i = -(num - 1) / 2; i <= (num - 1) / 2; i++) {
      result.push(mid + i);
    }
  } else {
    let avg = total / num;
    let start = (total - (num * (num - 1)) / 2) / num;
    for (let i = 0; i < num; i++) {
      result.push(start + i);
    }
  }

  return result;
}