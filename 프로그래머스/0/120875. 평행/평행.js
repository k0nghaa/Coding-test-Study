function solution(dots) {
  const check = (a, b, c, d) => {
    const [x1, y1] = dots[a];
    const [x2, y2] = dots[b];
    const [x3, y3] = dots[c];
    const [x4, y4] = dots[d];

    return (y2 - y1) * (x4 - x3) === (y4 - y3) * (x2 - x1);
  };
  
  if (check(0, 1, 2, 3)) return 1;
  if (check(0, 2, 1, 3)) return 1;
  if (check(0, 3, 1, 2)) return 1;

  return 0;
}