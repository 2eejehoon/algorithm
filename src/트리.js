class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(data) {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      // 값이 같은 경우
      if (current.data === data) {
        console.log("값이 같은 경우");
        return;
      }

      // 새로운 값이 현재 값보다 작은 경우 -> 왼쪽
      if (current.data > data) {
        if (current.left === null) {
          current.left = node;
          break;
        } else {
          current = current.left;
          continue;
        }
      }

      // 새로운 값이 현재 값보다 큰 경우 -> 오른쪽
      if (current.data < data) {
        if (current.right === null) {
          current.right = node;
          break;
        } else {
          current = current.right;
          continue;
        }
      }
    }

    return this;
  }

  search(data) {
    if (!this.root) {
      console.log("empty");
      return;
    }

    let current = this.root;
    while (current) {
      if (current.data === data) {
        console.log(true);
        return;
      }

      if (current.data < data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
}

const tree = new BinarySearchTree();
