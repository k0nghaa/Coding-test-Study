function solution(my_string) {
    let onlyNumStr= my_string.replace(/[^0-9]/g, "")
    
    let onlyNumArr = [...onlyNumStr].map(Number)
    
    let sortArr = onlyNumArr.sort((a, b) => a - b)
    
    return sortArr;
}