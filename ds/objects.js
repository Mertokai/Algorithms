const obj = {
  name: "Mertokai",
  age: 21,
  key: true,
  sayMyName: function () {
    console.log(this.name);
  },
};

obj.hobby = "Football";

delete obj.hobby;

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key"]);

obj.sayMyName();

// keys

console.log(Object.keys(obj));

// values

console.log(Object.values(obj));

// entries

console.log(Object.entries(obj));
