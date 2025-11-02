function solution(my_string) {
  const arr = [...my_string];
  const VowelArr = ['a', 'e', 'i', 'o', 'u'];
  const filteredArr = arr.filter(char => !VowelArr.includes(char));
  return filteredArr.join('');
}