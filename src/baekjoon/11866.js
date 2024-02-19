const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(arr) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  unshift(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  push(data) {
    const node = new Node(data);

    if (this.tail === null) {
      this.tail = node;
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  shift() {
    if (this.head === null) {
      return;
    }

    const head = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }

    return head;
  }

  pop() {
    if (this.tail === null) {
      return;
    }

    const tail = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;

    return tail;
  }

  insert(data, index) {
    if (index < 0 || index > this.length) {
      console.log("invaild index");
      return;
    }

    if (index === 0) {
      this.unshift(data);
      return;
    }

    if (index === this.length) {
      this.push(data);
      return;
    }

    const node = new Node(data);
    let pointer = 0;
    let current = this.head;
    let before;

    while (pointer < index) {
      pointer++;
      before = current;
      current = current.next;
    }
    node.next = current;
    node.prev = before;
    before.next = node;
    current.prev = node;
    this.length++;
  }

  delete(index) {
    if (index < 0 || index > this.length - 1) {
      console.log("invalid index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return;
    }

    if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return;
    }

    let current = this.head;
    let before;
    let pointer = 0;

    while (pointer < index) {
      pointer++;
      before = current;
      current = current.next;
    }

    before.next = current.next;
    before.next.prev = before;
    this.length--;
  }

  print() {
    const list = [];
    let current = this.head;

    while (current) {
      list.push({
        data: current.data,
        prev: current.prev?.data,
        next: current.next?.data,
      });
      current = current.next;
    }

    console.log(list);
  }
}

const queue = new DoublyLinkedList();
for (let i = 1; i <= N; i++) {
  queue.push(i);
}

const answer = [];

while (queue.length > 0) {
  for (let i = 0; i < K - 1; i++) {
    const head = queue.shift();
    queue.push(head.data);
  }
  const head = queue.shift();
  answer.push(head.data);
}
console.log("<" + answer.join(", ") + ">");
