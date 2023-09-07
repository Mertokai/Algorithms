function factorial(n) {
  let multi = 1;
  for (let i = 1; i <= n; i++) {
    multi = i * multi;
  }
  return multi;
}
console.log(factorial(0));
