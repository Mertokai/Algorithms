const arr = [1, 2, 3, "mertokai"];

arr.push(4); // add last

arr.unshift(0); // add beggining

arr.pop(); // remove end

arr.shift(); // remove beggining

for (const item of arr) {
  console.log(item);
}

//filter

console.log(arr.filter((x) => x > 0));
//reduce
console.log(
  arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
);

// concat

const arr2 = [5, 6, 7, 8];

const newArr = arr.concat(arr2, "selam");

console.log(newArr);

// splice
console.log(arr.splice(2, 1));
