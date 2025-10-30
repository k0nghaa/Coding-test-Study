function solution(age) {
  const newArr = [...String(age)]; 
  const alpha = "abcdefghij";      
  return newArr.map(num => alpha[num]).join(''); 
}