/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n;
  let a = 0;
  let b = 1;
  while (n > 0) {
    [a, b] = [b, a + b];
    n--;
  }
  return a;
};
