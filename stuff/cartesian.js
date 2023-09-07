function cartesian(a, b) {
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      arr.push([a[i], b[j]]);
    }
  }

  return arr;
}

const a = [1, 2];
const b = [3, 4, 5];

console.log(cartesian(a, b));
