function Prime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(Prime(1));
console.log(Prime(5));
console.log(Prime(4));
