function solution(array) {
    var newArray = array.sort((a, b) => a - b);
    var newArrayHalf = Math.ceil((newArray.length) / 2);
    var answer = newArray[newArrayHalf-1]
    
    return answer;
}