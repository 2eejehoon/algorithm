const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(n);
const arr = input.split(" ").map(Number);
class Node {
  constructor(data) {
    this.data = data;
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

  unshift(data) {
    const node = new Node(data);
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

  push(data) {
    const node = new Node(data);
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
}
const answer = [];
const deque = new Deque();
for (let i = 0; i < N; i++) {
  deque.push([arr[i], i + 1]);
}
while (deque.length > 0) {
  const [value, index] = deque.shift().data;
  answer.push(index);
  if (value > 0) {
    for (let i = 0; i < value - 1; i++) {
      if (deque.length > 0) {
        deque.push(deque.shift().data);
      }
    }
  }
  if (value < 0) {
    for (let i = 0; i < -1 * value; i++) {
      if (deque.length > 0) {
        deque.unshift(deque.pop().data);
      }
    }
  }
}
console.log(answer.join(" "));
