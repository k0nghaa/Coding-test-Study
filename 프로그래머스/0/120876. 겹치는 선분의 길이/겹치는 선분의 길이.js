function solution(lines) {
  function getOverlapRange([a, b], [c, d]) {
    const start = Math.max(a, c);
    const end = Math.min(b, d);
    if (start >= end) return [];
    return [start, end];
  }

  const merged = new Set();

  const pairs = [
    [lines[0], lines[1]],
    [lines[1], lines[2]],
    [lines[0], lines[2]],
  ];

  for (let [L1, L2] of pairs) {
    const [s, e] = getOverlapRange(L1, L2);
    for (let x = s; x < e; x++) {
      merged.add(x);
    }
  }

  return merged.size;
}