function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, " ")  
    .split(" ")          
    .filter(Boolean)      
    .map(Number) 
    .reduce((a, b) => a + b, 0);
}