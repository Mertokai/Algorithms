function climb(number) {
  if (number == 2) {
    return 2;
  }
  if (number == 1) {
    return 1;
  }
  let result = climb(number - 1) + climb(number - 2);
  return result;
}
// 1 1
//2 11 2
// 3 111 12 21
// 4 1111 112 121 211 22

console.log(climb(6));
