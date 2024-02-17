const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let answer = "";
const stack = [];
for (let i = 0; i < input.length; i++) {
  const [order, X] = input[i];
  if (order === 1) {
    stack.push(X);
    continue;
  }
  if (order === 2) {
    if (stack.length > 0) {
      const top = stack.pop();
      answer += top + "\n";
    } else {
      answer += -1 + "\n";
    }
    continue;
  }
  if (order === 3) {
    const len = stack.length;
    answer += len + "\n";
    continue;
  }
  if (order === 4) {
    if (stack.length === 0) {
      answer += 1 + "\n";
    } else {
      answer += 0 + "\n";
    }
    continue;
  }
  if (order === 5) {
    if (stack.length > 0) {
      answer += stack[stack.length - 1] + "\n";
    } else {
      answer += -1 + "\n";
    }
  }
}

console.log(answer.slice(0, -1));
