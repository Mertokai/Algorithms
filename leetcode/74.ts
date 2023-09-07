var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let array = matrix[i];
    let low = 0;
    let high = array.length - 1;
    do {
      let mid = Math.floor((low + high) / 2);
      if (array[mid] < target) {
        low = mid + 1;
      } else if (array[mid] > target) {
        high = mid - 1;
      } else {
        return true;
      }
    } while (low <= high);
  }
  return false;
};
