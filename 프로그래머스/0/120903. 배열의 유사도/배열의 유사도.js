function solution(s1, s2) {
  const result = s1.map(el => s2.includes(el));
  return result.filter(Boolean).length;
}