const array: number[] = [1, 2, 3, 4, 5, 6, 7];
const needle: number = 5;

function binarySearch(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;
  do {
    let mid = (low + high) / 2;
    if (haystack[mid] === needle) {
      return true;
    } else if (haystack[mid] > needle) {
      high = mid - 1;
    } else if (haystack[mid] < needle) {
      low = mid + 1;
    }
  } while (high >= low);
  return false;
}

console.log(binarySearch(array, needle));
