function solution(polynomial) {
  const terms = polynomial.split(" + ");

  let xSum = 0;
  let numSum = 0;


  terms.forEach(term => {
    if (term.includes("x")) {

      const coeff = term === "x" ? 1 : Number(term.replace("x", ""));
      xSum += coeff;
    } else {

      numSum += Number(term);
    }
  });

  let result = "";

  if (xSum) result += (xSum === 1 ? "x" : `${xSum}x`);
  if (numSum) result += (xSum ? " + " : "") + numSum;

  return result;
}