function solution(A, B) {
  let arr = A.split("");

  for (let count = 0; count <= A.length; count++) {
    if (arr.join("") === B) return count;

    let last = arr.pop(); 
    arr.unshift(last);  
  }

  return -1;
}