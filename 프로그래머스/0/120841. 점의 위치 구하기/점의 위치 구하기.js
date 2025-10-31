function solution(dot) {
   const [sx, sy] = [Math.sign(dot[0]), Math.sign(dot[1])];
if (sx === 1 && sy === 1) return 1;
if (sx === -1 && sy === 1) return 2;
if (sx === -1 && sy === -1) return 3;
if (sx === 1 && sy === -1) return 4;
}