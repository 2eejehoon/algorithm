const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
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

  unshift(value) {
    const node = new Node(value);
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

  push(value) {
    const node = new Node(value);
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

const deque = new Deque();
const arr = input.map((v) => v.split(" "));
const answer = [];

arr.forEach((v) => {
  const [commnad, X] = v;
  switch (commnad) {
    case "1":
      deque.unshift(X);
      break;

    case "2":
      deque.push(X);
      break;

    case "3":
      if (deque.length > 0) {
        const head = deque.shift();
        answer.push(head.value);
      } else {
        answer.push(-1);
      }
      break;

    case "4":
      if (deque.length > 0) {
        const tail = deque.pop();
        answer.push(tail.value);
      } else {
        answer.push(-1);
      }
      break;

    case "5":
      answer.push(deque.length);
      break;

    case "6":
      answer.push(deque.length === 0 ? 1 : 0);
      break;

    case "7":
      if (deque.length > 0) {
        answer.push(deque.head.value);
      } else {
        answer.push(-1);
      }
      break;

    case "8":
      if (deque.length > 0) {
        answer.push(deque.tail.value);
      } else {
        answer.push(-1);
      }
      break;

    default:
      break;
  }
});
console.log(answer.join("\n"));
