function solution(my_string) {
    const strArr = [...my_string];
    const set = new Set(strArr);
    const setArr = [...set]
    return setArr.join('')
}