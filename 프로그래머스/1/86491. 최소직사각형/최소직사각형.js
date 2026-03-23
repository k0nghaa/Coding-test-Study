function solution(sizes) {
    let maxW = 0;
    let maxH = 0;

    for (let [w, h] of sizes) {
      let big = Math.max(w, h);
      let small = Math.min(w, h);

      maxW = Math.max(maxW, big);
      maxH = Math.max(maxH, small);
    }

    return maxW * maxH;
}