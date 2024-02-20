const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(value, index) {
    this.value = value;
    this.index = index;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  unshift(value, index) {
    const node = new Node(value, index);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const head = this.head;
      this.head = node;
      this.head.next = head;
      head.prev = this.head;
    }
    this.length++;
  }

  push(value, index) {
    const node = new Node(value, index);
    if (this.length === 0) {
      this.tail = node;
      this.head = node;
    } else {
      const tail = this.tail;
      this.tail = node;
      this.tail.prev = tail;
      tail.next = this.tail;
    }
    this.length++;
  }

  shift() {
    const head = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
      this.head.prev = null;
    }
    this.length--;
    return head;
  }

  pop() {
    const tail = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return tail;
  }

  left(value) {
    if (this.length === 0) {
      return;
    }
    let temp = value;
    while (temp > 0) {}
    const head = this.shift();
    this.push(head);
    temp--;
  }

  right(value) {
    if (this.length === 0) {
      return;
    }
    let temp = value;
    while (temp > 0) {}
    const tail = this.pop();
    this.unshift(tail);
    temp--;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push({ value: current.value, index: current.index });
      current = current.next;
    }
    console.log(arr);
  }
}

const deque = new Deque();
const arr = input.split(" ").map(Number);
arr.forEach((v, i) => {
  deque.push(v, i + 1);
});
const answer = [];

while (deque.length > 0) {
  const { value, index } = deque.shift();
  answer.push(index);

  if (value > 0) {
    deque.left(value - 1);
  } else {
    deque.right(-value - 1);
  }
}

console.log(answer);
