const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(n);
const students = input.split(" ").map(Number);

const check = (arr, target) => {
  let order = 1;
  const stack = [];

  while (arr.length > 0 || stack.length > 0) {
    if (order === target) {
      return "Nice";
    }

    if (stack[stack.length - 1] === order) {
      stack.pop();
      order++;
      continue;
    }

    if (arr.length > 0) {
      const head = arr.shift();
      if (head === order) {
        order++;
        continue;
      }

      stack.push(head);
    } else {
      return "Sad";
    }
  }
};
const answer = check(students, N);
console.log(answer);
