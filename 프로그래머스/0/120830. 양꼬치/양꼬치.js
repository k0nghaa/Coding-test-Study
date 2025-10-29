function solution(n, k) {
    let free =Math.floor(n / 10)
    return (n * 12000) + (2000 * (k - free))
}