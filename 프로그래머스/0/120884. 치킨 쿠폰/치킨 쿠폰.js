function solution(chicken) {
  let coupon = chicken;
  let service = 0;     

  while (coupon >= 10) {
    let free = Math.floor(coupon / 10); 
    service += free;                   
    coupon = coupon % 10 + free;       
  }

  return service;
}