function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
console.time('Time');
console.log(fib(40));
console.timeEnd('Time');

function mem(fn) {
  let cache = [];
  return function (n) {
    let idx = n.toString();
    if (cache[idx] === undefined) {
      cache[idx] = fn(n);
    }
    return cache[idx];
  };
}

let fast_fib = mem(fib);
console.time('Time1');
console.log(fast_fib(40));
console.timeEnd('Time1');

console.time('Time2');
console.log(fast_fib(40));
console.timeEnd('Time2');
