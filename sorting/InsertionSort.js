const array = [1, 2, 4, 7, 5, 6, 3];
function InsertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let sort = array[i];
    j = i - 1;
    while (j > 0 && array[j] > sort) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = sort;
  }
  return array;
}

console.log(InsertionSort(array));
