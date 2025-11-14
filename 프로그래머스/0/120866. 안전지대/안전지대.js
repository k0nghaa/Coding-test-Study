function solution(board) {
  const n = board.length;
  const m = board[0].length;

  const danger = new Set();

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],  [0, 0],  [0, 1],
    [1, -1],  [1, 0],  [1, 1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        for (let [dx, dy] of directions) {
          const nx = i + dx;
          const ny = j + dy;

          if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
            danger.add(nx + "," + ny);
          }
        }
      }
    }
  }

  return n * m - danger.size;
}