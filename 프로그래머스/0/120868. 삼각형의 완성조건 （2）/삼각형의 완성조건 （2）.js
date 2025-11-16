function solution(sides) {
  const [a, b] = sides.sort((a, b) => a - b);
  const min = b - a + 1;  
  const max = a + b - 1;   
  return max - min + 1;
}