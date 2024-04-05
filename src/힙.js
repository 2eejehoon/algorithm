class MinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyUp();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.heap[parentIndex] && this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown() {
    let index = 0;
    let leftIndex = index * 2 + 1;
    let rightIndex = index * 2 + 2;
    while (this.heap[leftIndex]) {
      let smallerChildIndex = this.heap[leftIndex];
      if (this.heap[rightIndex] && this.heap[rightIndex] < this.heap[leftIndex]) {
        smallerChildIndex = rightIndex;
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        [this.heap[smallerChildIndex], this.heap[index]] = [this.heap[index], this.heap[smallerChildIndex]];
      }
      index = smallerChildIndex;
      leftIndex = leftIndex = index * 2 + 1;
      rightIndex = index * 2 + 2;
    }
  }

  size() {
    return this.heap.length;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.heap[parentIndex] && this.heap[parentIndex] < this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown() {
    let index = 0;
    let leftIndex = index * 2 + 1;
    let rightIndex = index * 2 + 2;
    while (this.heap[leftIndex]) {
      let largerChildIndex = leftIndex;
      if (this.heap[rightIndex] && this.heap[rightIndex] > this.heap[leftIndex]) {
        largerChildIndex = rightIndex;
      }
      if (this.heap[index] > this.heap[largerChildIndex]) {
        break;
      } else {
        [this.heap[largerChildIndex], this.heap[index]] = [this.heap[index], this.heap[largerChildIndex]];
      }
      index = largerChildIndex;
      leftIndex = index * 2 + 1;
      rightIndex = index * 2 + 2;
    }
  }
}
