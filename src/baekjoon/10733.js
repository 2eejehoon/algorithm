const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [K, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const stack = [];

for (let num of arr) {
  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}
const answer = stack.reduce((acc, cur) => acc + cur, 0);
console.log(answer);
