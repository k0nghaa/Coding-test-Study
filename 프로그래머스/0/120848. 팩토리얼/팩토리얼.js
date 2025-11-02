function solution(n) {
    let result = 1;
    let i = 1; 

while (result * (i + 1) <= n) {
  i++; 
  result *= i;
}

return i;
}