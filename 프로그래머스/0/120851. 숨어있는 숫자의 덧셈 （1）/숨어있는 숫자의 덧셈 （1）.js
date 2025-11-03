function solution(my_string) {
  let nums = my_string.replace(/[^0-9]/g, "");
  let numsArr = [...nums];
  let sum = numsArr.reduce((acc, cur) => acc + Number(cur), 0);
  return sum;
}
