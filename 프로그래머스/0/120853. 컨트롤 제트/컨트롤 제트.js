function solution(s) {
    let sum = [];
    
    for (let num of s.split(" ")) {
        if (num === "Z") {
            sum.pop();
        } else {
            (sum.push(Number(num)))
        }
    }
    
    return sum.reduce((arr,cur) => arr + cur, 0)
}