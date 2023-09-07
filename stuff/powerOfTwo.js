function power(n) {
  if (n == 1) {
    return true;
  }
  for (let i = 3; i <= n; i = i + 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(power(256));
