class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;

b.next = c;

c.next = d;

/// A => B => C => D => NULL

const print = (head) => {
  let curr = head;
  while (curr != null) {
    console.log(curr.val);
    curr = curr.next;
  }
};
// print(a);

// recursive version

const printRecursive = (head) => {
  if (head == null) return;
  console.log(head.val);
  printRecursive(head.next);
};
// printRecursive(a);

// PUSH AND RETURN ARRAY PROBLEM

const returnArray = (head) => {
  const nodeValues = [];
  let curr = head;
  while (curr != null) {
    nodeValues.push(curr.val);
    curr = curr.next;
  }
  return nodeValues;
};
// console.log(returnArray(a));

// Summ List

const Sum = (head) => {
  let curr = head;
  let total = 0;
  while (curr != null) {
    total += curr.val;
    curr = curr.next;
  }
  return total;
};
// console.log(Sum(a));

// linked list find

const find = (head, target) => {
  let curr = head;
  while (curr != null) {
    if (curr.val == target) {
      return true;
    }
    curr = curr.next;
  }
  return false;
};

// console.log(find(a, 5));

// Get Index
const getIndex = (head, index) => {
  let curr = head;
  let counter = 0;
  while (curr != null) {
    if (index == counter) {
      return curr.val;
    }
    counter++;
    curr = curr.next;
  }
};
// console.log(getIndex(a, 0));
// reverse linked list

const reverse = (head) => {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

console.log(reverse(a));

// null -> (1) -> (2) -> (3) -> null
