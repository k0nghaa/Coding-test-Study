function solution(my_string) {
  let lower = my_string.toLowerCase();
  let sort = [...lower].sort(); 
  return sort.join("");
}