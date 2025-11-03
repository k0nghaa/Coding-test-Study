function solution(quiz) {
  return quiz.map(q => {
    let [x, op, y, eq, z] = q.split(' ');

    let result = 0;
    if (op === '+') result = Number(x) + Number(y);
    else result = Number(x) - Number(y);

    return result === Number(z) ? "O" : "X";
  });
}