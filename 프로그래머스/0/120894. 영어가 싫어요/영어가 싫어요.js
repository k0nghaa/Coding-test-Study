function solution(numbers) {
  const words = ["zero","one","two","three","four","five","six","seven","eight","nine"];

  words.forEach((word, i) => {
    numbers = numbers.replaceAll(word, i);
  });

  return Number(numbers);
}