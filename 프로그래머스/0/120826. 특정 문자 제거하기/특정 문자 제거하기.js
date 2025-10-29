function solution(my_string, letter) {
    const strArr = [...my_string]
    const answer = strArr.filter(char => char !== letter).join('')
    return answer;
}