const array: number[] = [1, 2, 4, 7, 5, 6, 3];
const needle: number = 0;
function linearSearch(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}
console.log(linearSearch(array, needle));
