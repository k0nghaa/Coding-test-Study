function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let str of babbling) {
    let temp = str;

    for (let w of words) {
      temp = temp.replace(w, "_");
    }

    if (temp.replace(/_/g, "") === "") {
      count++;
    }
  }

  return count;
}