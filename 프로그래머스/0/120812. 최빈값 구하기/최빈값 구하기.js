function solution(array) {
    let count = {};
    array.forEach((num) => {
        count[num] = (count[num] || 0) + 1;
    });
    
    let maxVal = Math.max(...Object.values(count));
    let modes = Object.keys(count).filter(key => count[key] === maxVal);
    
    if (modes.length > 1) {
        return -1;
    } else {
        return Number(modes[0]);
    }
}