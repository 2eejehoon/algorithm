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

function solution(queue1, queue2) {
  let answer = 0;
  let sum1 = 0;
  let sum2 = 0;
  const deque1 = new Deque();
  queue1.forEach((v) => {
    sum1 += v;
    deque1.push(v);
  });
  const deque2 = new Deque();
  queue2.forEach((v) => {
    sum2 += v;
    deque2.push(v);
  });
  const sum = sum1 + sum2;
  const goal = sum / 2;
  while (sum1 !== sum2) {
    answer++;
    if (answer >= queue1.length * 3 + queue2.length * 3) {
      return -1;
    }
    if (sum1 > sum2) {
      const value = deque1.shift().data;
      sum1 -= value;
      sum2 += value;
      deque2.push(value);
    } else {
      const value = deque2.shift().data;
      sum1 += value;
      sum2 -= value;
      deque1.push(value);
    }
  }
  return answer;
}
