function solution(n) {
    let piece = 6;
    let pizza = 1;
    
    while ((piece * pizza) % n !== 0) {
        pizza++;
    }
    
    return pizza;
}